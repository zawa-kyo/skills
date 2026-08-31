import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

/** Runtime dependency metadata stored at the root of `package-lock.json`. */
type LockRootPackage = {
  /** Runtime packages installed in a deployed hook bundle. */
  dependencies?: Record<string, string>;
  /** Node.js version requirement preserved in the temporary manifest. */
  engines?: Record<string, string>;
};

/** Package-lock fields used to create the deployed runtime manifest. */
type PackageLock = {
  /** Package name copied into the temporary manifest. */
  name?: string;
  /** Lockfile package metadata, keyed by the package installation path. */
  packages?: { ""?: LockRootPackage };
};

/** Absolute path to the deployed runtime directory. */
const runtimeRoot = dirname(fileURLToPath(import.meta.url));
/** Path to the package manifest temporarily replaced during setup. */
const packagePath = resolve(runtimeRoot, "package.json");
/** Path to the lockfile that defines the runtime dependencies. */
const lockPath = resolve(runtimeRoot, "package-lock.json");

/**
 * Returns whether a Node.js version supports built-in TypeScript type stripping.
 *
 * @param version - Node.js version string from `process.versions.node`.
 * @returns Whether the runtime supports this package's TypeScript entry points.
 */
function supportsTypeStripping(version: string): boolean {
  const [major, minor] = version.split(".").map(Number);
  return major > 22 || (major === 22 && minor >= 18);
}

/**
 * Creates a package manifest containing only dependencies required by the deployed hook.
 *
 * @param lock - Parsed package lockfile.
 * @returns A manifest suitable for `npm ci` in the deployed runtime directory.
 * @throws When the lockfile does not define root runtime dependencies.
 */
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
  console.error(
    `[markdown-lint] Node.js 22.18 or later is required; found ${process.versions.node}.`,
  );
  process.exitCode = 1;
} else {
  const originalPackage = readFileSync(packagePath, "utf8");
  let status = 1;

  try {
    const lock = JSON.parse(readFileSync(lockPath, "utf8")) as PackageLock;
    writeFileSync(
      packagePath,
      `${JSON.stringify(installManifest(lock), null, 2)}\n`,
    );

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
