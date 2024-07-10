const fs = require("fs");
const path = require("path");
const { cwd } = require("process");

const svgDirPath = path.join(cwd(), "/assets/icons");
const indexPath = path.join(cwd(), "/assets/icons/index.ts");

const snakeToCamel = (snakeCaseString) =>
  snakeCaseString.replace(/_([a-z])/g, (m, c) => c.toUpperCase());

const fileNames = fs
  .readdirSync(svgDirPath)
  .filter((name) => name.split(".")[1] === "svg");

let str = "";

fileNames.forEach((fileName) => {
  const [name] = fileName.split(".");
  str += `export { default as ${snakeToCamel(name)} } from "./${fileName}";\n`;
});

fs.writeFileSync(indexPath, str);
