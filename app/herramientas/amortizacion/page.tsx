import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculadora de Amortización Fiscal — Tablas AEAT",
  description:
    "Calcula la amortización fiscal de inmovilizado material e intangible según las tablas oficiales del Reglamento del IS (RD 634/2015). Métodos lineal, degresivo y más.",
};

const categorias = [
  {
    id: "inmuebles",
    nombre: "Inmuebles",
    descripcion: "Edificios industriales, comerciales, residenciales y construcciones.",
    elementos: [
      { id: "edificios-industriales", nombre: "Edificios Industriales", coef: "3%", periodo: "68 años" },
      { id: "edificios-comerciales", nombre: "Edificios Comerciales", coef: "2%", periodo: "100 años" },
    ],
  },
  {
    id: "elementos-mecanicos",
    nombre: "Elementos Mecánicos",
    descripcion: "Maquinaria, instalaciones, útiles y herramientas.",
    elementos: [
      { id: "maquinaria", nombre: "Maquinaria", coef: "12%", periodo: "18 años" },
      { id: "instalaciones", nombre: "Instalaciones", coef: "10%", periodo: "20 años" },
    ],
  },
  {
    id: "elementos-transporte",
    nombre: "Elementos de Transporte",
    descripcion: "Vehículos, camiones, embarcaciones y aeronaves.",
    elementos: [
      { id: "vehiculos-turismo", nombre: "Vehículos Turismo", coef: "16%", periodo: "14 años" },
      { id: "camiones", nombre: "Camiones y Furgonetas", coef: "20%", periodo: "10 años" },
    ],
  },
  {
    id: "equipos-informaticos",
    nombre: "Equipos Informáticos",
    descripcion: "Ordenadores, servidores, periféricos y sistemas.",
    elementos: [
      { id: "equipos-proceso-datos", nombre: "Equipos para Proceso de Datos", coef: "25%", periodo: "8 años" },
      { id: "sistemas-telefonicos", nombre: "Sistemas y Equipos Telefónicos", coef: "20%", periodo: "10 años" },
    ],
  },
];

const regimenes = [
  { id: "lineal", nombre: "Lineal", descripcion: "Cuotas constantes" },
  { id: "degresivo", nombre: "Degresivo", descripcion: "% sobre valor pendiente" },
  { id: "numeros-digitos", nombre: "Suma dígitos", descripcion: "Vida útil ponderada" },
  { id: "unidades-produccion", nombre: "Unidades producción", descripcion: "Por actividad" },
];

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
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
          Calculadora de Amortización Fiscal
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          Herramienta basada en las <strong style={{ color: "var(--foreground)" }}>tablas oficiales del Reglamento del Impuesto sobre Sociedades</strong>{" "}
          (RD 634/2015, Anexo I). Selecciona la categoría del elemento y el método de amortización.
        </p>
      </div>

      {/* Métodos disponibles */}
      <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {regimenes.map((r) => (
          <div
            key={r.id}
            className="rounded-lg border p-4"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}
          >
            <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{r.nombre}</div>
            <div className="mt-0.5 text-xs" style={{ color: "var(--muted-foreground)" }}>{r.descripcion}</div>
          </div>
        ))}
      </div>

      {/* Categorías y elementos */}
      <div className="space-y-8">
        {categorias.map((cat) => (
          <div key={cat.id}>
            <div className="mb-4 border-b pb-2" style={{ borderColor: "var(--border)" }}>
              <h2 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>{cat.nombre}</h2>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{cat.descripcion}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {cat.elementos.map((elem) => (
                <div
                  key={elem.id}
                  className="rounded-xl border p-5"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>{elem.nombre}</h3>
                    <span
                      className="rounded px-2 py-0.5 text-xs font-bold"
                      style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                    >
                      Máx. {elem.coef}
                    </span>
                  </div>
                  <p className="mb-4 text-xs" style={{ color: "var(--muted-foreground)" }}>
                    Período máximo: {elem.periodo}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {regimenes.map((r) => (
                      <Link
                        key={r.id}
                        href={`/herramientas/amortizacion/${cat.id}/${elem.id}/${r.id}`}
                        className="rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:opacity-80"
                        style={{
                          borderColor: "var(--primary)",
                          color: "var(--primary)",
                          backgroundColor: "transparent",
                        }}
                      >
                        {r.nombre}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Nota normativa */}
      <div
        className="mt-10 rounded-xl border p-5 text-sm"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
      >
        <strong style={{ color: "var(--foreground)" }}>Fuente normativa:</strong> Real Decreto 634/2015, de 10 de julio, por el que
        se aprueba el Reglamento del Impuesto sobre Sociedades. Anexo I — Tabla de coeficientes de amortización.
        Artículo 12 de la Ley 27/2014, de 27 de noviembre, del Impuesto sobre Sociedades (LIS).
      </div>
    </div>
  );
}
