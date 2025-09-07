export const revalidate = 10; // Revalidate every 10s

export default async function Page() {
  const data = { time: new Date().toISOString() };
  const colors = [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff",
    "#bdb2ff",
  ];
  const bg = colors[Math.floor(Math.random() * colors.length)];

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", background: bg }}>
      <h1>🕒 ISR Demo</h1>
      <p>Page generated at:</p>
      <pre>{data.time}</pre>
      <p>
        Refresh within 10s → same color & timestamp (cached)
        <br />
        After 10s → background regeneration starts
        <br />
        Next refresh → new color + new timestamp
      </p>
    </main>
  );
}
