import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function cls(...xs) { return xs.filter(Boolean).join(" "); }

export default function ErrorPage() {
  const err = useRouteError();
  const title =
    (err && (err.statusText || err.message)) ||
    "Something went wrong";

  return (
    <>
      <Helmet>
        <title>Oops — Something went wrong</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="min-h-[70vh] grid place-items-center">
        <div className="container-pro">
          <div className="max-w-xl mx-auto card p-6 md:p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[hsl(var(--accent-soft))] mx-auto">
              <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--brand))]" />
            </div>

            <h1 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight">
              Unexpected Application Error
            </h1>

            <p className="mt-2 text-sm text-[hsl(var(--muted))]">
              {String(title)}
            </p>

            {err?.stack && (
              <details className="mt-4 text-left rounded-xl bg-[hsl(var(--bg))] p-3 ring-1 ring-[hsl(var(--border))]">
                <summary className="cursor-pointer text-sm font-semibold">Details</summary>
                <pre className="mt-2 text-xs overflow-auto whitespace-pre-wrap">
{String(err.stack)}
                </pre>
              </details>
            )}

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button onClick={() => window.location.reload()} className="btn btn-primary">
                Reload
              </button>
              <Link to="/" className="no-underline">
                <button className="btn btn-ghost">Go home</button>
              </Link>
            </div>

            <p className="mt-4 text-[11px] text-[hsl(var(--muted))]">
              If this keeps happening, check your console and recent code changes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
