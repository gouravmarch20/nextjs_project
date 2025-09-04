// pages/index.js
"use client";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "Gourav",
    role: "FE",
    company: "Hive",
    resume: "https://tinyurl.com/gm-FE-25",
    job: "https://tinyurl.com/5n6u4pn9",
    referral: true,
    interview: false
  });

  const messageRef = useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      resume:
        prev.role === "FS"
          ? "https://tinyurl.com/gm-FS-25"
          : "https://tinyurl.com/gm-FE-25"
    }));
  }, [form.role]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const generateMessage = () => {
    const lines = [];
    const roleLabel = form.role === "FS" ? "Full Stack Engineer" : "Frontend Engineer";

    lines.push(
      `Hi, this is ${form.name || "[Your Name]"}, a ${roleLabel} with 2.5 years of experience in B2C travel company.`
    );
    lines.push("I specialize in JavaScript, React, Redux, with strong DSA.");

    if (form.referral && !form.interview) {
      lines.push(
        `I found an opening at ${form.company || "[Company]"}. Would you be able to refer me?`
      );
    } else if (form.interview && !form.referral) {
      lines.push(
        `I found an opening at ${form.company || "[Company]"}. Would you be able to schedule an interview?`
      );
    } else if (form.interview && form.referral) {
      lines.push(
        `I found an opening at ${form.company || "[Company]"}. Would you be able to refer me or schedule an interview?`
      );
    }

    if (form.job && isValidUrl(form.job)) lines.push(`Job: ${form.job}`);
    if (form.resume && isValidUrl(form.resume)) lines.push(`Resume: ${form.resume}`);

    return lines.join("\n");
  };

  const handleCopy = () => {
    const text = generateMessage();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-6 space-y-4">
        <h1 className="text-2xl font-bold">LinkedIn DM Generator</h1>

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="FE"
              checked={form.role === "FE"}
              onChange={handleChange}
            />
            Frontend
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="FS"
              checked={form.role === "FS"}
              onChange={handleChange}
            />
            Full Stack
          </label>
        </div>

        <input
          name="company"
          placeholder="Target Company"
          value={form.company}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="job"
          placeholder="Job Link"
          value={form.job}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="referral"
              checked={form.referral}
              onChange={handleChange}
            />
            Referral
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="interview"
              checked={form.interview}
              onChange={handleChange}
            />
            Interview
          </label>
        </div>

        <div className="border p-3 rounded bg-gray-50 text-sm">
          <strong>Generated Message:</strong>
          <p ref={messageRef} className="mt-2 whitespace-pre-wrap">{generateMessage()}</p>
        </div>

        <button
          onClick={handleCopy}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {copied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
}
