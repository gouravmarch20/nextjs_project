"use client";
import { useAuth } from "@/components_pgW/webview/AuthProvider";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const { login, user } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      router.replace("/webview/dashboard"); // replace avoids back button issues
    }
  }, [user, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username || "Guest");
    router.replace("/webview/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
