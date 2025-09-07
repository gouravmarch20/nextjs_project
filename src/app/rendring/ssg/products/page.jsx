import Counter from './ClintC'
export default function Page() {
  return (
    <main>
      <h1>📦 SSG Page</h1>
      <p>This page is generated at build-time (static).</p>

      {/* Client-side interactive component */}
      <Counter />
    </main>
  );
}

// Client Component
