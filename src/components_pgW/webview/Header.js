"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsWebView } from "@/components_pgW/webview/useIsWebView";
import { useEffect } from "react";
const navLinks = [
  { href: "/webview", label: "Home" },
  { href: "/webview/about", label: "About" },
  { href: "/webview/dashboard", label: "Dashboard" },
  { href: "/webview/profile", label: "Profile" },
  { href: "/webview/settings", label: "Settings" },
  { href: "/webview/login", label: "Login" },
];

export default function Header() {
  const pathname = usePathname();
  const isWebView = useIsWebView();

  function debugLog(message, data) {
    console.log(message, data); // still logs in browser DevTools
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: "DEBUG", message, data })
      );
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      debugLog("📌 Debug Info", {
        url: window.location.href,
        pathname,
        isWebView,
      });
    }
  }, [pathname, isWebView]);

  // ⏳ Loading state
  if (isWebView === null) {
    return (
      <div className="bg-red-700 text-white text-center py-2">
        <h2>Loading header...</h2>
      </div>
    );
  }

  // 📱 Inside WebView → no header
  if (isWebView === true) {
    return null;
  }

  // 🌐 Normal browser → show header
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">MyApp</h1>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                } hover:text-yellow-300 transition`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
