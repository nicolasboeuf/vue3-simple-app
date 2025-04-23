import { existsSync } from "fs"; // From the core 'fs' module
import { rm } from "fs/promises"; // From the core 'fs/promises' module
import { execa } from "execa"; // From the 'execa' package

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);

    // Determine if the folder is 'dist' or 'build'
    const folderName = existsSync("dist") ? "dist" : "build";

    // Add all files in the folder to git
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);

    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);

    // Remove the build folder
    await rm(folderName, { recursive: true, force: true });

    // Checkout to the master/main branch
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);

    console.log("Successfully deployed");
  } catch (e) {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  }
})();
