// src/pages/AdminLogin.jsx
import React, { useMemo, useState } from "react";
import { useAuth } from "../lib/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function cls(...xs) { return xs.filter(Boolean).join(" "); }

const ERR_MAP = {
  "auth/invalid-credential": "Invalid email or password.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/user-not-found": "No account found for that email.",
  "auth/wrong-password": "Invalid email or password.",
  "auth/too-many-requests": "Too many attempts. Try again in a few minutes.",
};

export default function AdminLogin() {
  const { login } = useAuth(); // expects login(email, password)
  const nav = useNavigate();
  const loc = useLocation();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const from = useMemo(() => {
    // support redirect after auth: navigate to ?next=/admin or state.from
    const next = new URLSearchParams(loc.search).get("next");
    return next || loc.state?.from || "/admin";
  }, [loc]);

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    const em = email.trim();
    const pwv = pw;
    if (!em || !pwv) { setErr("Enter email and password."); return; }

    setBusy(true);
    try {
      await login(em, pwv);
      nav(from, { replace: true });
    } catch (e) {
      // Guard all cases so we never throw to the console as "Uncaught (in promise) null"
      const code = e?.code || "";
      const msg = ERR_MAP[code] || e?.message || "Sign-in failed. Please try again.";
      setErr(msg);
    } finally {
      setBusy(false);
    }
  }

  const canSubmit = !!email.trim() && !!pw && !busy;

  return (
    <>
      <Helmet>
        <title>Admin Login — A7mads Camera</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="w-full border-y border-[hsl(var(--border))] bg-[hsl(var(--surface))]">
        <div className="container-pro py-12 md:py-16">
          <div className="mx-auto max-w-md card p-6 md:p-7 shadow-soft">
            <h1 className="text-2xl font-semibold tracking-tight">Admin Login</h1>
            <p className="text-sm text-[hsl(var(--muted))] mt-1">
              Sign in with your admin email to manage uploads &amp; galleries.
            </p>

            {/* Helpful env hint (only really useful during setup) */}
            <div className="mt-4 text-[11px] rounded-xl p-3 ring-1 ring-[hsl(var(--border))] bg-[hsl(var(--accent))]/10">
              Make sure this site’s domain is in <b>Firebase Auth → Authorized domains</b>.
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && canSubmit && onSubmit(e)}
                  className="mt-1 input w-full"
                  placeholder="you@domain.com"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Password</span>
                <div className="mt-1 relative">
                  <input
                    type={showPw ? "text" : "password"}
                    autoComplete="current-password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && canSubmit && onSubmit(e)}
                    className="input w-full pr-24"
                    placeholder="••••••••"
                    required
                    aria-describedby={err ? "login-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    className="absolute inset-y-0 right-2 my-1 rounded-md px-2 text-xs bg-[hsl(var(--surface))] hover:bg-[hsl(var(--accent))]/15"
                    tabIndex={-1}
                    aria-pressed={showPw}
                    aria-label={showPw ? "Hide password" : "Show password"}
                  >
                    {showPw ? "Hide" : "Show"}
                  </button>
                </div>
              </label>

              {err && (
                <div
                  id="login-error"
                  className="text-sm rounded-md px-3 py-2 ring-1 ring-red-200 bg-red-50 text-red-700"
                  role="alert"
                >
                  {err}
                </div>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className={cls("btn btn-primary w-full", !canSubmit && "opacity-60 cursor-not-allowed")}
              >
                {busy ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <p className="text-[11px] text-[hsl(var(--muted))] mt-4">
              Issues signing in? Check your network, disable content blockers on this page, and verify App Check isn’t blocking Auth.
            </p>
          </div>
        </div>

        {/* subtle accent strip */}
        <div className="h-2 bg-gradient-to-r from-[hsl(var(--accent))]/40 via-[hsl(var(--accent))]/20 to-transparent" />
      </section>
    </>
  );
}
