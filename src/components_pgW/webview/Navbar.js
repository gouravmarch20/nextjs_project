"use client";
import Link from "next/link";
import { useAuth } from "./AuthProvider";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link href="/webview/dashboard">Dashboard</Link>
        <Link href="/webview/profile">Profile</Link>
        <Link href="/webview/settings">Settings</Link>
        <Link href="/webview/about">About</Link>
      </div>
      <div>
        {user ? (
          <>
            <span className="mr-4">Hi, {user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/webview/login" className="bg-blue-500 text-white px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}