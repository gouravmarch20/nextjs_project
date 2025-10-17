"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function HomePage() {
  const { data: session, update } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAddVendorId = async () => {
    if (!session) return;

    const vendorId = Math.random().toString(36).substring(2, 10);
    await update({
      ...session,
      user: {
        ...session.user,
        vendor_id: vendorId,
      },
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      {!session ? (
        <div className="flex flex-col items-center space-y-2">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded"
          />
          <button
            onClick={() =>
              signIn("credentials", {
                redirect: false,
                username: email || "dummy@example.com",
                password: password || "dummy",
              })
            }
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Fake Sign In
          </button>
          <button
            onClick={() => signIn("google", { prompt: "select_account" })}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Sign In with Google
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-2">
          <p>Name: {session.user?.name}</p>
          <p>Email: {session.user?.email}</p>
          <p>Vendor ID: {session.user?.vendor_id || "Not set"}</p>

          <button
            onClick={handleAddVendorId}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add Random Vendor ID
          </button>

          <button
            onClick={() => signOut({ redirect: false })}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </main>
  );
}
