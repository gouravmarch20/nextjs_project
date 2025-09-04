"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components_pgW/webview/AuthProvider";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/webview/login");
    } else {
      router.push("/webview/dashboard");
    }
  }, [user, router]);

  return (
    <div className="flex justify-center items-center h-screen text-xl">
      Redirecting...
    </div>
  );
}
