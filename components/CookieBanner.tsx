"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t px-4 py-4 shadow-lg sm:px-6"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
      role="dialog"
      aria-label="Banner de consentimiento de cookies"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          Usamos cookies propias y de terceros (Google AdSense) para mejorar la experiencia y mostrar publicidad
          relevante. Consulta nuestra{" "}
          <Link
            href="/legal/politica-cookies"
            className="underline underline-offset-2"
            style={{ color: "var(--primary)" }}
          >
            Política de Cookies
          </Link>{" "}
          y{" "}
          <Link
            href="/legal/politica-privacidad"
            className="underline underline-offset-2"
            style={{ color: "var(--primary)" }}
          >
            Política de Privacidad
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="shrink-0 rounded-lg px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--primary)" }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
