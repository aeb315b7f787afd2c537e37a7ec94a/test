const fs = require("fs");
const { execSync } = require("child_process");

try {
  const whoami = execSync("whoami").toString().trim();

  fs.writeFileSync("whoami.txt", whoami);
  fs.writeFileSync("uid.txt", process.getuid ? String(process.getuid()) : "windows");

  console.log("CHECK DONE:", whoami);
} catch (e) {
  fs.writeFileSync("error.txt", e.message);
}
