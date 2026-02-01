const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse"); // works now
const mammoth = require("mammoth");

async function parseResume(filePath, originalName) {
  const ext = path.extname(originalName).toLowerCase();

  if (ext === ".pdf") {
    const data = await pdfParse(fs.readFileSync(filePath));
    return data.text;
  }

  if (ext === ".docx") {
    const data = await mammoth.extractRawText({ path: filePath });
    return data.value;
  }

  throw new Error("Unsupported file type: " + ext);
}

module.exports = parseResume;
