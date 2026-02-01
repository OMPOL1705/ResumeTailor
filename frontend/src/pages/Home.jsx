import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import ResumePreview from "../components/ResumePreview";

function Home() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        AI Resume Tailor
      </h1>

      <ResumeUpload onParsed={setResumeData} />
      <ResumePreview resume={resumeData} />
    </div>
  );
}

export default Home;
