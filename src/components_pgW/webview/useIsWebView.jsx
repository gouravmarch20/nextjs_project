"use client";
import { useLayoutEffect, useState } from "react";

/**
 * Detect if running inside WebView
 * @returns {boolean|null} - true (webview), false (normal browser), null (loading)
 */
export function useIsWebView() {
  const [isWebView, setIsWebView] = useState(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setIsWebView(params.get("webview") === "true");
    }
  }, []);

  return isWebView; // null = loading, true/false = resolved
}