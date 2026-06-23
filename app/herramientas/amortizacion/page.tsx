import type { Metadata } from "next";
import Link from "next/link";
import { aeatData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Calculadora de Amortización Fiscal — Estimación Directa Simplificada AEAT",
  description:
    "Calcula la amortización lineal de inmovilizado material e intangible según las tablas oficiales AEAT para Estimación Directa Simplificada. Actualizado 2024.",
};

const ID_REGIMEN = "estimacion-directa-simplificada";

const categoriaLabels: Record<string, string> = {
  inmuebles: "Inmuebles",
  mobiliario: "Mobiliario e Instalaciones",
  maquinaria: "Maquinaria",
  vehiculos: "Vehículos",
  tecnologia: "Equipos Informáticos",
  software: "Software",
  herramientas: "Útiles y Herramientas",
  intangibles: "Inmovilizado Intangible",
};

export default function AmortizacionIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <nav className="mb-4 flex gap-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
          <Link href="/" className="hover:underline">Inicio</Link>
          <span>/</span>
          <span style={{ color: "var(--foreground)" }}>Amortización Fiscal</span>
        </nav>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
          >
            Estimación Directa Simplificada
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 text-xs"
            style={{ backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
          >
            Método Lineal · AEAT 2024
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
          Calculadora de Amortización Fiscal
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          Selecciona el elemento de inmovilizado para calcular su amortización anual por el{" "}
          <strong style={{ color: "var(--foreground)" }}>método lineal</strong>, según las tablas oficiales de la AEAT para
          autónomos y pymes en <strong style={{ color: "var(--foreground)" }}>Estimación Directa Simplificada</strong>.
        </p>
      </div>

      {/* Grid de elementos */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {aeatData.map((elem) => (
          <Link
            key={elem.id_elemento}
            href={`/herramientas/amortizacion/${elem.categoria}/${elem.id_elemento}/${ID_REGIMEN}`}
            className="group flex flex-col rounded-xl border p-5 transition-shadow hover:shadow-md"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <span
                className="rounded px-1.5 py-0.5 font-mono text-xs font-semibold"
                style={{ backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
              >
                {elem.codigo_aeat}
              </span>
              <span
                className="rounded-full px-2 py-0.5 text-xs font-bold"
                style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
              >
                {elem.coeficiente_maximo}%
              </span>
            </div>

            <h2
              className="mb-1 flex-1 text-sm font-semibold leading-snug group-hover:underline"
              style={{ color: "var(--foreground)" }}
            >
              {elem.nombre_elemento}
            </h2>

            <div className="mt-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
              {categoriaLabels[elem.categoria] ?? elem.categoria} · {elem.periodo_maximo_años} años máx.
            </div>

            <div
              className="mt-3 text-xs font-medium"
              style={{ color: "var(--primary)" }}
            >
              Calcular amortización →
            </div>
          </Link>
        ))}
      </div>

      {/* Nota normativa */}
      <div
        className="mt-10 rounded-xl border p-5 text-sm"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
      >
        <strong style={{ color: "var(--foreground)" }}>Fuente:</strong> Tablas de amortización para{" "}
        <em>Estimación Directa Simplificada</em> publicadas por la Agencia Tributaria (AEAT). Método lineal aplicado
        según el coeficiente máximo de cada elemento. Normativa: Orden HAC/304/2024 y disposiciones concordantes.
      </div>
    </div>
  );
}
