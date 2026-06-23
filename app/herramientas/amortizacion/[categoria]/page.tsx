import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aeatData } from "@/lib/data";

const ID_REGIMEN = "estimacion-directa-simplificada";

const categoriaLabels: Record<string, { titulo: string; descripcion: string }> = {
  inmuebles: {
    titulo: "Amortización Fiscal de Inmuebles",
    descripcion:
      "Calcula la amortización lineal de edificios y construcciones afectos a la actividad económica según la AEAT.",
  },
  mobiliario: {
    titulo: "Amortización de Instalaciones, Mobiliario y Enseres",
    descripcion:
      "Coeficientes de amortización para mobiliario, instalaciones y enseres en Estimación Directa Simplificada.",
  },
  maquinaria: {
    titulo: "Amortización Fiscal de Maquinaria",
    descripcion:
      "Tablas oficiales AEAT para calcular la amortización lineal de maquinaria afecta a la actividad.",
  },
  vehiculos: {
    titulo: "Amortización de Elementos de Transporte",
    descripcion:
      "Coeficientes máximos y períodos de amortización para vehículos y elementos de transporte según la AEAT.",
  },
  tecnologia: {
    titulo: "Amortización de Equipos Informáticos",
    descripcion:
      "Tablas de amortización para ordenadores, servidores y equipos de tratamiento de la información.",
  },
  software: {
    titulo: "Amortización de Software y Programas Informáticos",
    descripcion:
      "Coeficientes de amortización para sistemas y programas informáticos según normativa AEAT vigente.",
  },
  herramientas: {
    titulo: "Amortización de Útiles y Herramientas",
    descripcion:
      "Tablas AEAT para la amortización lineal de útiles, herramientas y pequeño inmovilizado material.",
  },
  intangibles: {
    titulo: "Amortización de Inmovilizado Intangible",
    descripcion:
      "Coeficientes fiscales para la amortización de activos intangibles: patentes, marcas, derechos y concesiones.",
  },
};

interface Props {
  params: Promise<{ categoria: string }>;
}

export function generateStaticParams() {
  const categorias = [...new Set(aeatData.map((e) => e.categoria))];
  return categorias.map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const meta = categoriaLabels[categoria];
  if (!meta) return { title: "Categoría no encontrada" };

  return {
    title: `${meta.titulo} — Tablas AEAT`,
    description: `${meta.descripcion} Método lineal. Estimación Directa Simplificada.`,
    alternates: { canonical: `/herramientas/amortizacion/${categoria}` },
    openGraph: {
      title: `${meta.titulo} — Tablas AEAT`,
      description: meta.descripcion,
      type: "website",
    },
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;

  const meta = categoriaLabels[categoria];
  const elementos = aeatData.filter((e) => e.categoria === categoria);

  if (!meta || elementos.length === 0) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap gap-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
        <Link href="/" className="hover:underline">Inicio</Link>
        <span>/</span>
        <Link href="/herramientas/amortizacion" className="hover:underline">Amortización</Link>
        <span>/</span>
        <span style={{ color: "var(--foreground)" }}>{meta.titulo}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
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
          {meta.titulo}
        </h1>
        <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {meta.descripcion}
        </p>
      </div>

      {/* Elementos de esta categoría */}
      <div className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
          {elementos.length === 1 ? "Elemento disponible" : `${elementos.length} elementos disponibles`}
        </h2>

        {elementos.map((elem) => (
          <Link
            key={elem.id_elemento}
            href={`/herramientas/amortizacion/${categoria}/${elem.id_elemento}/${ID_REGIMEN}`}
            className="group flex items-center justify-between rounded-xl border p-5 transition-shadow hover:shadow-md"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
          >
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span
                  className="font-mono text-xs font-semibold"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {elem.codigo_aeat}
                </span>
              </div>
              <h3 className="font-semibold group-hover:underline" style={{ color: "var(--foreground)" }}>
                {elem.nombre_elemento}
              </h3>
              <p className="mt-1 text-xs" style={{ color: "var(--muted-foreground)" }}>
                Período máximo: {elem.periodo_maximo_años} años
              </p>
            </div>

            <div className="ml-4 flex flex-col items-end gap-1">
              <span
                className="rounded-full px-2.5 py-1 text-sm font-bold"
                style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
              >
                {elem.coeficiente_maximo}%
              </span>
              <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                coef. máx.
              </span>
            </div>

            <span className="ml-4 text-sm font-medium" style={{ color: "var(--primary)" }}>
              →
            </span>
          </Link>
        ))}
      </div>

      {/* Enlace de vuelta */}
      <div className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
        <Link
          href="/herramientas/amortizacion"
          className="text-sm font-medium hover:underline"
          style={{ color: "var(--primary)" }}
        >
          ← Ver todas las categorías de amortización
        </Link>
      </div>
    </div>
  );
}
