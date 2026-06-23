import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aeatData } from "@/lib/data";
import AmortizacionCalculator from "@/components/AmortizacionCalculator";
import Link from "next/link";

const ID_REGIMEN = "estimacion-directa-simplificada";

interface PageParams {
  categoria: string;
  id_elemento: string;
  id_regimen: string;
}

interface Props {
  params: Promise<PageParams>;
}

// ---------------------------------------------------------------------------
// generateStaticParams — 8 rutas, régimen siempre fijo
// ---------------------------------------------------------------------------

export function generateStaticParams(): PageParams[] {
  return aeatData.map((elem) => ({
    categoria: elem.categoria,
    id_elemento: elem.id_elemento,
    id_regimen: ID_REGIMEN,
  }));
}

// ---------------------------------------------------------------------------
// Metadata dinámica por elemento
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria, id_elemento, id_regimen } = await params;

  if (id_regimen !== ID_REGIMEN) return { title: "No encontrado" };

  const elem = aeatData.find(
    (e) => e.categoria === categoria && e.id_elemento === id_elemento
  );
  if (!elem) return { title: "No encontrado" };

  const title = `Amortización Lineal: ${elem.nombre_elemento} (AEAT ${elem.codigo_aeat})`;
  const description = `Calcula la amortización fiscal de ${elem.nombre_elemento} por el método lineal según Estimación Directa Simplificada. Coeficiente máximo AEAT: ${elem.coeficiente_maximo}% — Período máximo: ${elem.periodo_maximo_años} años (${elem.codigo_aeat}).`;

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
    alternates: {
      canonical: `/herramientas/amortizacion/${categoria}/${id_elemento}/${ID_REGIMEN}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function AmortizacionElementoPage({ params }: Props) {
  const { categoria, id_elemento, id_regimen } = await params;

  if (id_regimen !== ID_REGIMEN) notFound();

  const elem = aeatData.find(
    (e) => e.categoria === categoria && e.id_elemento === id_elemento
  );
  if (!elem) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap gap-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
        <Link href="/" className="hover:underline">Inicio</Link>
        <span>/</span>
        <Link href="/herramientas/amortizacion" className="hover:underline">Amortización</Link>
        <span>/</span>
        <span style={{ color: "var(--foreground)" }}>{elem.nombre_elemento}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
          >
            {elem.codigo_aeat}
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 text-xs"
            style={{ backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
          >
            Estimación Directa Simplificada
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 text-xs"
            style={{ backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
          >
            Método Lineal
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
          Amortización Fiscal: {elem.nombre_elemento}
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted-foreground)" }}>
          Cálculo según las tablas oficiales de la AEAT para autónomos y pymes en régimen de{" "}
          <strong style={{ color: "var(--foreground)" }}>Estimación Directa Simplificada</strong>.
        </p>
      </div>

      {/* Ficha técnica AEAT */}
      <div
        className="mb-8 grid gap-4 rounded-xl border p-6 sm:grid-cols-3"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}
      >
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
            Coeficiente máximo
          </div>
          <div className="mt-1 text-3xl font-bold" style={{ color: "var(--primary)" }}>
            {elem.coeficiente_maximo}%
          </div>
          <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>anual sobre valor de adquisición</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
            Período máximo
          </div>
          <div className="mt-1 text-3xl font-bold" style={{ color: "var(--foreground)" }}>
            {elem.periodo_maximo_años}
          </div>
          <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>años de vida útil fiscal</div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
            Código AEAT
          </div>
          <div className="mt-1 text-2xl font-bold font-mono" style={{ color: "var(--foreground)" }}>
            {elem.codigo_aeat}
          </div>
          <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>tabla Orden HAC/304/2024</div>
        </div>
      </div>

      {/* Calculadora interactiva */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold" style={{ color: "var(--foreground)" }}>
          Calculadora de amortización lineal
        </h2>
        <AmortizacionCalculator
          coeficiente_maximo={elem.coeficiente_maximo}
          periodo_maximo_años={elem.periodo_maximo_años}
        />
      </div>

      {/* Nota legal */}
      <div
        className="rounded-xl border p-5 text-xs leading-relaxed"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
      >
        <strong style={{ color: "var(--foreground)" }}>Fuente y advertencia legal:</strong> Coeficientes extraídos de las
        tablas de amortización para <em>Estimación Directa Simplificada</em> publicadas por la AEAT (Orden HAC/304/2024 y
        normativa concordante). Los cálculos son orientativos. Consulte siempre con un asesor fiscal colegiado antes de
        aplicar estos valores en su declaración de IRPF o IS.
      </div>
    </div>
  );
}
