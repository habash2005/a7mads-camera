// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useAuth } from "../lib/auth";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);
    try {
      await login(email, pw);
      nav("/admin", { replace: true });
    } catch (e) {
      const msg =
        e?.code === "auth/invalid-credential"
          ? "Invalid email or password."
          : e?.message || "Sign-in failed.";
      setErr(msg);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="container-site py-12">
      <div className="max-w-md mx-auto bg-white/70 backdrop-blur rounded-2xl p-6 ring-1 ring-[var(--border)] shadow-soft">
        <h2 className="text-xl font-semibold mb-1">Admin Login</h2>
        <p className="text-sm text-[color:var(--muted)] mb-6">
          Sign in with your admin email.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 input w-full"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Password</span>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="mt-1 input w-full"
              required
            />
          </label>

          {err && <div className="text-sm text-wine">{err}</div>}

          <button type="submit" disabled={busy} className="btn btn-primary w-full">
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </section>
  );
}
