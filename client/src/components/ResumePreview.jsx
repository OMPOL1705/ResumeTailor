function ResumePreview({ resume }) {
  if (!resume) return null;

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-6">Extracted Resume Details</h2>

      {/* Skills */}
      <section className="mb-6">
        <h3 className="font-medium mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="font-medium mb-2">Experience</h3>
        {resume.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-semibold">
              {exp.role} <span className="text-gray-500">· {exp.company}</span>
            </p>
            <ul className="list-disc ml-6 text-sm text-gray-700">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section>
        <h3 className="font-medium mb-2">Projects</h3>
        {resume.projects.map((proj, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-semibold">{proj.name}</p>
            <p className="text-sm text-gray-700">{proj.description}</p>
            <p className="text-xs text-gray-500 mt-1">
              Tech: {proj.tech.join(", ")}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ResumePreview;
