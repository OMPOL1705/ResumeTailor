function extractResumeDetails(text) {
  return {
    skills: extractSkills(text),
    experience: extractExperience(text),
    projects: extractProjects(text)
  };
}

function extractSkills(text) {
  const SKILLS = [
    "React", "Node.js", "MongoDB", "Express",
    "JavaScript", "Postman", "Firebase"
  ];

  return SKILLS.filter(skill =>
    text.toLowerCase().includes(skill.toLowerCase())
  );
}

function extractExperience(text) {
  // V1: placeholder (improve later)
  return [
    {
      company: "Detected from resume",
      role: "Software Engineer",
      bullets: []
    }
  ];
}

function extractProjects(text) {
  return [];
}

module.exports = extractResumeDetails;
