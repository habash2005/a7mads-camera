import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function prettyError(code) {
  switch (code) {
    case "auth/invalid-email": return "That email doesn’t look right.";
    case "auth/user-not-found":
    case "auth/wrong-password": return "Incorrect email or password.";
    case "auth/too-many-requests": return "Too many attempts. Please wait and try again.";
    case "auth/network-request-failed": return "Network error. Check your connection.";
    default: return "Couldn’t sign in. Please try again.";
  }
}

export default function AdminLogin() {
  const nav = useNavigate();
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pass);
      const dest = state?.from?.pathname || "/admin";
      nav(dest, { replace: true });
    } catch (e) {
      // If something else throws, Firebase errors have 'code'
      setErr(prettyError(e?.code));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full py-10 md:py-16">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-2xl font-serif font-semibold mb-2">Admin Login</h2>
        <p className="text-sm text-[color:var(--muted)] mb-6">Sign in with your admin email.</p>

        <form onSubmit={onSubmit} className="space-y-3">
          <label className="block">
            <div className="text-xs font-semibold mb-1">Email</div>
            <input
              type="email"
              className="input w-full"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="block">
            <div className="text-xs font-semibold mb-1">Password</div>
            <input
              type="password"
              className="input w-full"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </label>

          {err && <div className="text-sm text-wine">{err}</div>}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={submitting}
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-xs text-[color:var(--muted)]">
          <Link to="/">← Back to site</Link>
        </div>
      </div>
    </section>
  );
}
