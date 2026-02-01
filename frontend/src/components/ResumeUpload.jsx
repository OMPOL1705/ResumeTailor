import { useState } from "react";
import Axios from "axios";

const axios = Axios.create();


function ResumeUpload({ onParsed }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);
    const res = await axios.post(
      "http://localhost:5000/api/upload-resume",
      formData
    );
    setLoading(false);

    onParsed(res.data);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>

      <input
        type="file"
        accept=".pdf,.docx"
        className="block w-full text-sm mb-4
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-600
          hover:file:bg-indigo-100"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg
          hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {loading ? "Parsing..." : "Upload"}
      </button>
    </div>
  );
}

export default ResumeUpload;
