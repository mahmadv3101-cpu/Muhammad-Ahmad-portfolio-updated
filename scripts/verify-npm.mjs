import fs from "node:fs";

const packageJson = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const hasPnpmLock = fs.existsSync(new URL("../pnpm-lock.yaml", import.meta.url));
const hasPackageLock = fs.existsSync(new URL("../package-lock.json", import.meta.url));

if (!packageJson.scripts?.dev || !packageJson.scripts?.build) {
  throw new Error("Missing npm dev/build scripts");
}
if (packageJson.packageManager || packageJson.devDependencies?.pnpm || hasPnpmLock) {
  throw new Error("pnpm metadata still exists");
}
if (!hasPackageLock) {
  throw new Error("package-lock.json is missing");
}

console.log("npm-only package verified");
console.log(packageJson.scripts);
