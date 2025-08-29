// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function AdminLogin() {
  const { ready, user, isAdmin, login } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/admin";

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  if (ready && user && isAdmin) {
    return <Navigate to={redirectTo} replace />;
  }

  async function submit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login(email.trim(), pass);
      nav(redirectTo, { replace: true });
    } catch (e2) {
      setErr(e2?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container-site py-12">
      <div className="max-w-md mx-auto card p-6">
        <h1 className="h2">Admin Login</h1>
        <p className="text-sm text-[color:var(--muted)] mt-1">
          Sign in with your admin email.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input
              className="input mt-1 w-full"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input
              className="input mt-1 w-full"
              type="password"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {err && <p className="text-rose text-sm">{err}</p>}

          <button className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </section>
  );
}
