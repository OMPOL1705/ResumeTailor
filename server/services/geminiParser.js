const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function parseResumeWithGemini(resumeText) {
  const prompt = `
    Extract the resume into a JSON object. Return ONLY valid JSON.
    Schema: { "name": "", "email": "", "skills": [], "experience": [], "projects": [], "education": [] }

    Resume Text:
    ${resumeText}`;

  // 2026 Stable Model is gemini-2.5-flash. 
  // 2026 Preview Model is gemini-3-flash-preview.
  const MODEL = "gemini-2.5-flash"; 
  const URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  try {
    const response = await axios.post(URL, {
      contents: [{ parts: [{ text: prompt }] }]
    });

    let content = response.data.candidates[0].content.parts[0].text;

    // Remove markdown code blocks (```json ... ```)
    const cleanJson = content.replace(/```json|```/g, "").trim();
    
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    throw new Error("Failed to parse resume.");
  }
}

module.exports = parseResumeWithGemini;