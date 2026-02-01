const parseResume = require("../services/resumeParser");
const parseResumeWithGemini = require("../services/geminiParser");

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) throw new Error("No file uploaded");

    console.log("File received:", req.file.originalname);

    // Pass original filename for extension check
    const text = await parseResume(
      req.file.path,
      req.file.originalname
    );

    const structured = await parseResumeWithGemini(text);

    res.json(structured);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
