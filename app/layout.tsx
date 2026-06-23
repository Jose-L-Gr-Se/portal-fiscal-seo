import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portal Fiscal SEO — Herramientas Financieras B2B para España",
    template: "%s | Portal Fiscal SEO",
  },
  description:
    "Herramientas de cálculo fiscal profesionales para empresas y asesores en España. Amortización, IRPF, IVA y más según normativa AEAT.",
  keywords: ["calculadora fiscal", "amortización fiscal", "AEAT", "España", "B2B", "asesoría fiscal"],
  authors: [{ name: "Portal Fiscal SEO" }],
  metadataBase: new URL("https://portalfiscalseo.es"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Portal Fiscal SEO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: "var(--primary)" }}
            >
              PF
            </div>
            <span className="text-lg font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
              Portal Fiscal<span style={{ color: "var(--primary)" }}>SEO</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/herramientas/amortizacion"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--muted-foreground)" }}
            >
              Amortización Fiscal
            </Link>
            <Link
              href="/herramientas"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--muted-foreground)" }}
            >
              Herramientas
            </Link>
            <Link
              href="/normativa"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--muted-foreground)" }}
            >
              Normativa AEAT
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <span
              className="hidden rounded-full px-3 py-1 text-xs font-medium sm:block"
              style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
            >
              Datos AEAT 2024
            </span>
            <Link
              href="/contacto"
              className="rounded-md px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Contacto B2B
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t py-12" style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div
                className="flex h-6 w-6 items-center justify-center rounded text-xs font-bold text-white"
                style={{ backgroundColor: "var(--primary)" }}
              >
                PF
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                Portal Fiscal SEO
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Herramientas de cálculo fiscal B2B basadas en la normativa oficial de la AEAT para España.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--foreground)" }}>
              Herramientas
            </h3>
            <ul className="space-y-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
              <li><Link href="/herramientas/amortizacion" className="hover:underline">Calculadora Amortización</Link></li>
              <li><Link href="/herramientas/irpf" className="hover:underline">Simulador IRPF</Link></li>
              <li><Link href="/herramientas/iva" className="hover:underline">Liquidación IVA</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--foreground)" }}>
              Normativa
            </h3>
            <ul className="space-y-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
              <li><Link href="/normativa/lis" className="hover:underline">Ley IS (LIS)</Link></li>
              <li><Link href="/normativa/riva" className="hover:underline">Reglamento IVA</Link></li>
              <li><Link href="/normativa/tablas-aeat" className="hover:underline">Tablas AEAT</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--foreground)" }}>
              Legal
            </h3>
            <ul className="space-y-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
              <li><Link href="/aviso-legal" className="hover:underline">Aviso Legal</Link></li>
              <li><Link href="/privacidad" className="hover:underline">Política de Privacidad</Link></li>
              <li><Link href="/cookies" className="hover:underline">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            © {new Date().getFullYear()} Portal Fiscal SEO. Información orientativa basada en normativa AEAT vigente. No constituye asesoramiento fiscal profesional.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
