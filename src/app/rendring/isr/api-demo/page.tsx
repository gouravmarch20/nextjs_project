"use client"; // We need client JS for fetch every second
import { useEffect, useState } from "react";

export default function ISRApiDemoPage() {
  const [data, setData] = useState<{ time: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/time");
      const json = await res.json();
      setData(json);
    };

    fetchData(); // initial fetch

    const interval = setInterval(fetchData, 1000); // fetch every 1 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🕒 ISR API Demo</h1>
      <p>API hit every 1 second:</p>
      <pre>{data ? data.time : "Loading..."}</pre>
      <p>
        Refresh the page → first page served from ISR cache.
        <br />
        API keeps updating every second.
      </p>
    </main>
  );
}
