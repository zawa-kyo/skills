import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

type LockRootPackage = {
  dependencies?: Record<string, string>;
  engines?: Record<string, string>;
};

type PackageLock = {
  name?: string;
  packages?: { ""?: LockRootPackage };
};

const runtimeRoot = dirname(fileURLToPath(import.meta.url));
const packagePath = resolve(runtimeRoot, "package.json");
const lockPath = resolve(runtimeRoot, "package-lock.json");

function supportsTypeStripping(version: string): boolean {
  const [major, minor] = version.split(".").map(Number);
  return major > 22 || (major === 22 && minor >= 18);
}

function installManifest(lock: PackageLock): Record<string, unknown> {
  const rootPackage = lock.packages?.[""];
  if (!rootPackage?.dependencies) {
    throw new Error("package-lock.json does not define runtime dependencies");
  }

  return {
    name: lock.name,
    private: true,
    type: "module",
    engines: rootPackage.engines,
    dependencies: rootPackage.dependencies,
  };
}

if (!supportsTypeStripping(process.versions.node)) {
  console.error(`[markdown-lint] Node.js 22.18 or later is required; found ${process.versions.node}.`);
  process.exitCode = 1;
} else {
  const originalPackage = readFileSync(packagePath, "utf8");
  let status = 1;

  try {
    const lock = JSON.parse(readFileSync(lockPath, "utf8")) as PackageLock;
    writeFileSync(packagePath, `${JSON.stringify(installManifest(lock), null, 2)}\n`);

    const result = spawnSync("npm", ["ci", "--ignore-scripts"], {
      cwd: runtimeRoot,
      stdio: "inherit",
    });

    if (result.error) {
      throw result.error;
    }

    status = result.status ?? 1;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[markdown-lint] setup failed: ${message}`);
  } finally {
    writeFileSync(packagePath, originalPackage);
  }

  process.exitCode = status;
}
