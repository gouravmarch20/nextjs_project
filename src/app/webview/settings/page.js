"use client";
import { useAuth } from "../../../components_pgW/webview/AuthProvider";
import { useRouter } from "next/navigation";

export default function Settings() {
  const { user, loading } = useAuth();
  const router = useRouter();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    router.push("/webview/login");
    return null;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p>Only logged-in users can see this page.</p>
    </div>
  );
}
