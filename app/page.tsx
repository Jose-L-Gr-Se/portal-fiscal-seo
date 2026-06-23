import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portal Fiscal SEO — Herramientas Financieras B2B para España",
  description:
    "Calcula amortizaciones fiscales, simula IRPF y liquida IVA con datos oficiales de la AEAT. Herramientas B2B para asesores y empresas en España.",
};

const herramientas = [
  {
    titulo: "Calculadora de Amortización Fiscal",
    descripcion:
      "Calcula las cuotas de amortización por el método lineal según las tablas oficiales AEAT para Estimación Directa Simplificada. Cubre 8 categorías de inmovilizado.",
    href: "/herramientas/amortizacion",
    badge: "AEAT 2024",
    estado: "Disponible",
    categorias: ["Inmuebles", "Vehículos", "Maquinaria", "Tecnología", "Software", "Intangibles"],
  },
  {
    titulo: "Simulador IRPF",
    descripcion: "Estimación de retenciones e IRPF para autónomos y empresas según las tablas vigentes.",
    href: "/herramientas/irpf",
    badge: "Próximamente",
    estado: "En desarrollo",
    categorias: [],
  },
  {
    titulo: "Liquidación IVA",
    descripcion: "Modelos 303, 390 y cálculo de cuotas de IVA soportado/repercutido.",
    href: "/herramientas/iva",
    badge: "Próximamente",
    estado: "En desarrollo",
    categorias: [],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b py-20" style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
            >
              Normativa AEAT • Actualizado 2024
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: "var(--foreground)" }}>
              Herramientas Fiscales B2B para España
            </h1>
            <p className="mt-6 text-lg leading-8" style={{ color: "var(--muted-foreground)" }}>
              Calculadoras y simuladores fiscales profesionales basados en la normativa oficial de la{" "}
              <strong style={{ color: "var(--foreground)" }}>Agencia Tributaria (AEAT)</strong>. Diseñados para asesores
              fiscales, gestorías y departamentos financieros.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/herramientas/amortizacion"
                className="rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Calcular Amortización Fiscal →
              </Link>
              <Link
                href="/normativa/tablas-aeat"
                className="rounded-lg border px-6 py-3 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
              >
                Ver Tablas AEAT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              Herramientas disponibles
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
              Todas las herramientas utilizan datos oficiales de la AEAT y están actualizadas para el ejercicio fiscal 2024.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {herramientas.map((h) => (
              <div
                key={h.titulo}
                className="flex flex-col rounded-xl border p-6 transition-shadow hover:shadow-md"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
              >
                <div className="mb-4 flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
                    {h.titulo}
                  </h3>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: h.estado === "Disponible" ? "var(--accent)" : "var(--secondary)",
                      color: h.estado === "Disponible" ? "var(--accent-foreground)" : "var(--muted-foreground)",
                    }}
                  >
                    {h.badge}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {h.descripcion}
                </p>
                {h.categorias.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {h.categorias.map((cat) => (
                      <span
                        key={cat}
                        className="rounded px-2 py-0.5 text-xs"
                        style={{ backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
                <Link
                  href={h.href}
                  className="mt-6 rounded-lg px-4 py-2 text-center text-sm font-medium transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: h.estado === "Disponible" ? "var(--primary)" : "var(--secondary)",
                    color: h.estado === "Disponible" ? "var(--primary-foreground)" : "var(--muted-foreground)",
                  }}
                >
                  {h.estado === "Disponible" ? "Abrir calculadora" : "Próximamente"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-t py-12" style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            {[
              { valor: "100%", etiqueta: "Normativa AEAT oficial" },
              { valor: "2024", etiqueta: "Tablas actualizadas" },
              { valor: "B2B", etiqueta: "Orientado a profesionales" },
            ].map((item) => (
              <div key={item.etiqueta}>
                <div className="text-3xl font-bold" style={{ color: "var(--primary)" }}>
                  {item.valor}
                </div>
                <div className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {item.etiqueta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
