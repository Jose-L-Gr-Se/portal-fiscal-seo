import type { Metadata } from "next";
import { notFound } from "next/navigation";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PageParams {
  categoria: string;
  id_elemento: string;
  id_regimen: string;
}

interface Props {
  params: Promise<PageParams>;
}

// ---------------------------------------------------------------------------
// Data layer (placeholder — se rellenará con datos reales de la AEAT)
// ---------------------------------------------------------------------------

interface ElementoAmortizacion {
  id: string;
  nombre: string;
  categoriaId: string;
  coeficienteMaximo: number; // % anual
  periodoMaximo: number;     // años
  descripcionAEAT: string;
}

interface RegimenFiscal {
  id: string;
  nombre: string;
  descripcion: string;
  normativa: string;
}

// Stub: estas estructuras se poblarán con las tablas oficiales del RIS (RD 634/2015)
async function getElemento(categoriaId: string, elementoId: string): Promise<ElementoAmortizacion | null> {
  // TODO: reemplazar con fetch a base de datos o JSON estático de AEAT
  const elementos: Record<string, ElementoAmortizacion> = {
    "edificios-industriales": {
      id: "edificios-industriales",
      nombre: "Edificios Industriales",
      categoriaId: "inmuebles",
      coeficienteMaximo: 3,
      periodoMaximo: 68,
      descripcionAEAT: "Edificios destinados a actividades industriales según tabla del RIS Anexo I.",
    },
    "maquinaria": {
      id: "maquinaria",
      nombre: "Maquinaria",
      categoriaId: "elementos-mecanicos",
      coeficienteMaximo: 12,
      periodoMaximo: 18,
      descripcionAEAT: "Maquinaria en general según tabla del RIS Anexo I.",
    },
  };
  return elementos[elementoId] ?? null;
}

async function getRegimen(regimenId: string): Promise<RegimenFiscal | null> {
  const regimenes: Record<string, RegimenFiscal> = {
    "lineal": {
      id: "lineal",
      nombre: "Amortización Lineal",
      descripcion: "Cuotas anuales constantes aplicando un porcentaje fijo sobre el valor de adquisición.",
      normativa: "Art. 12.1.a) LIS — RD 634/2015 Anexo I",
    },
    "degresivo": {
      id: "degresivo",
      nombre: "Amortización Degresiva (% constante)",
      descripcion: "Porcentaje constante aplicado sobre el valor pendiente de amortizar al inicio de cada período.",
      normativa: "Art. 12.1.b) LIS",
    },
    "numeros-digitos": {
      id: "numeros-digitos",
      nombre: "Suma de Dígitos",
      descripcion: "Amortización acelerada mediante la suma de dígitos de los años de vida útil.",
      normativa: "Art. 12.1.c) LIS",
    },
    "unidades-produccion": {
      id: "unidades-produccion",
      nombre: "Unidades de Producción",
      descripcion: "Amortización proporcional a las unidades producidas en cada ejercicio.",
      normativa: "Art. 12.1.d) LIS",
    },
  };
  return regimenes[regimenId] ?? null;
}

// ---------------------------------------------------------------------------
// Metadata dinámica para SEO programático
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria, id_elemento, id_regimen } = await params;
  const elemento = await getElemento(categoria, id_elemento);
  const regimen = await getRegimen(id_regimen);

  if (!elemento || !regimen) {
    return { title: "Elemento no encontrado" };
  }

  const title = `Amortización ${elemento.nombre} — Método ${regimen.nombre}`;
  const description = `Calcula la amortización fiscal de ${elemento.nombre} usando el método ${regimen.nombre}. Coeficiente máximo AEAT: ${elemento.coeficienteMaximo}%. ${regimen.normativa}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    alternates: {
      canonical: `/herramientas/amortizacion/${categoria}/${id_elemento}/${id_regimen}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Static params (pSEO) — se ampliarán con todos los elementos de la AEAT
// ---------------------------------------------------------------------------

export async function generateStaticParams(): Promise<PageParams[]> {
  // TODO: generar desde el JSON completo de tablas AEAT
  return [
    { categoria: "inmuebles", id_elemento: "edificios-industriales", id_regimen: "lineal" },
    { categoria: "inmuebles", id_elemento: "edificios-industriales", id_regimen: "degresivo" },
    { categoria: "elementos-mecanicos", id_elemento: "maquinaria", id_regimen: "lineal" },
    { categoria: "elementos-mecanicos", id_elemento: "maquinaria", id_regimen: "degresivo" },
    { categoria: "elementos-mecanicos", id_elemento: "maquinaria", id_regimen: "numeros-digitos" },
  ];
}

// ---------------------------------------------------------------------------
// Cálculo de amortización
// ---------------------------------------------------------------------------

interface CuotaAmortizacion {
  anio: number;
  cuota: number;
  amortizadoAcumulado: number;
  pendienteAmortizar: number;
}

function calcularAmortizacionLineal(
  valorAdquisicion: number,
  coeficiente: number,
  periodoMaximo: number
): CuotaAmortizacion[] {
  const cuotaAnual = (valorAdquisicion * coeficiente) / 100;
  const result: CuotaAmortizacion[] = [];
  let acumulado = 0;

  for (let anio = 1; anio <= periodoMaximo && acumulado < valorAdquisicion; anio++) {
    const cuota = Math.min(cuotaAnual, valorAdquisicion - acumulado);
    acumulado += cuota;
    result.push({
      anio,
      cuota,
      amortizadoAcumulado: acumulado,
      pendienteAmortizar: valorAdquisicion - acumulado,
    });
  }
  return result;
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

const VALOR_EJEMPLO = 100_000;

export default async function AmortizacionElementoPage({ params }: Props) {
  const { categoria, id_elemento, id_regimen } = await params;
  const elemento = await getElemento(categoria, id_elemento);
  const regimen = await getRegimen(id_regimen);

  if (!elemento || !regimen) {
    notFound();
  }

  const tabla = calcularAmortizacionLineal(
    VALOR_EJEMPLO,
    elemento.coeficienteMaximo,
    Math.min(elemento.periodoMaximo, 10) // mostramos los primeros 10 años
  );

  const formatEUR = (n: number) =>
    new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex gap-2 text-xs" style={{ color: "var(--muted-foreground)" }}>
        <a href="/" className="hover:underline">Inicio</a>
        <span>/</span>
        <a href="/herramientas/amortizacion" className="hover:underline">Amortización</a>
        <span>/</span>
        <a href={`/herramientas/amortizacion/${categoria}`} className="hover:underline capitalize">
          {categoria.replace(/-/g, " ")}
        </a>
        <span>/</span>
        <span style={{ color: "var(--foreground)" }}>{elemento.nombre}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
          >
            {regimen.nombre}
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 text-xs"
            style={{ backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
          >
            {elemento.descripcionAEAT}
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
          Amortización Fiscal: {elemento.nombre}
        </h1>
        <p className="mt-2 text-base" style={{ color: "var(--muted-foreground)" }}>
          Método: <strong style={{ color: "var(--foreground)" }}>{regimen.nombre}</strong> — {regimen.descripcion}
        </p>
      </div>

      {/* Datos técnicos AEAT */}
      <div
        className="mb-8 grid gap-4 rounded-xl border p-6 sm:grid-cols-3"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}
      >
        <div>
          <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
            Coeficiente máximo
          </div>
          <div className="mt-1 text-2xl font-bold" style={{ color: "var(--primary)" }}>
            {elemento.coeficienteMaximo}% anual
          </div>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
            Período máximo
          </div>
          <div className="mt-1 text-2xl font-bold" style={{ color: "var(--foreground)" }}>
            {elemento.periodoMaximo} años
          </div>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
            Normativa aplicable
          </div>
          <div className="mt-1 text-sm font-semibold" style={{ color: "var(--foreground)" }}>
            {regimen.normativa}
          </div>
        </div>
      </div>

      {/* Tabla de amortización (ejemplo con 100.000 €) */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
          Cuadro de amortización — Ejemplo: {formatEUR(VALOR_EJEMPLO)}
        </h2>
        <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          Primeros {tabla.length} ejercicios fiscales
        </span>
      </div>

      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
        <table className="w-full text-sm">
          <thead style={{ backgroundColor: "var(--secondary)" }}>
            <tr>
              {["Año", "Cuota anual", "Amortizado acum.", "Pendiente"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tabla.map((fila, i) => (
              <tr
                key={fila.anio}
                style={{
                  backgroundColor: i % 2 === 0 ? "var(--card)" : "var(--secondary)",
                  borderTop: `1px solid var(--border)`,
                }}
              >
                <td className="px-4 py-3 font-mono font-medium" style={{ color: "var(--foreground)" }}>
                  {fila.anio}
                </td>
                <td className="px-4 py-3 font-mono" style={{ color: "var(--foreground)" }}>
                  {formatEUR(fila.cuota)}
                </td>
                <td className="px-4 py-3 font-mono" style={{ color: "var(--primary)" }}>
                  {formatEUR(fila.amortizadoAcumulado)}
                </td>
                <td className="px-4 py-3 font-mono" style={{ color: "var(--muted-foreground)" }}>
                  {formatEUR(fila.pendienteAmortizar)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nota legal */}
      <p className="mt-6 text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
        <strong>Nota:</strong> Los valores mostrados son orientativos basados en los coeficientes máximos del{" "}
        <strong>Anexo I del Reglamento del Impuesto sobre Sociedades (RD 634/2015)</strong>. Consulte siempre con un
        asesor fiscal colegiado antes de aplicar estos coeficientes en su declaración.
      </p>
    </div>
  );
}
