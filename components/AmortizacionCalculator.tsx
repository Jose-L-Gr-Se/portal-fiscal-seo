"use client";

import { useState } from "react";

interface Fila {
  anio: number;
  cuota: number;
  pendiente: number;
}

function calcularLineal(valor: number, coeficiente: number): Fila[] {
  const cuotaAnual = (valor * coeficiente) / 100;
  const filas: Fila[] = [];
  let pendiente = valor;

  while (pendiente > 0.005) {
    const cuota = Math.min(cuotaAnual, pendiente);
    pendiente = Math.max(0, pendiente - cuota);
    filas.push({ anio: filas.length + 1, cuota, pendiente });
  }

  return filas;
}

const fmt = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format(n);

interface Props {
  coeficiente_maximo: number;
  periodo_maximo_años: number;
}

export default function AmortizacionCalculator({ coeficiente_maximo, periodo_maximo_años }: Props) {
  const [valorInput, setValorInput] = useState("");
  const [filas, setFilas] = useState<Fila[] | null>(null);
  const [error, setError] = useState("");

  function handleCalcular() {
    const valor = parseFloat(valorInput.replace(/\./g, "").replace(",", "."));
    if (!isFinite(valor) || valor <= 0) {
      setError("Introduce un valor de adquisición válido y positivo.");
      setFilas(null);
      return;
    }
    setError("");
    setFilas(calcularLineal(valor, coeficiente_maximo));
  }

  return (
    <div>
      {/* Input */}
      <div
        className="mb-6 rounded-xl border p-6"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)" }}
      >
        <label
          htmlFor="valor"
          className="mb-2 block text-sm font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          Valor de adquisición (€)
        </label>
        <div className="flex gap-3">
          <input
            id="valor"
            type="text"
            inputMode="decimal"
            placeholder="Ej: 25000"
            value={valorInput}
            onChange={(e) => setValorInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCalcular()}
            className="flex-1 rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2"
            style={{
              borderColor: "var(--input)",
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              "--tw-ring-color": "var(--ring)",
            } as React.CSSProperties}
          />
          <button
            onClick={handleCalcular}
            className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Calcular
          </button>
        </div>
        {error && (
          <p className="mt-2 text-xs" style={{ color: "var(--destructive)" }}>
            {error}
          </p>
        )}
        <p className="mt-3 text-xs" style={{ color: "var(--muted-foreground)" }}>
          Coeficiente lineal aplicado: <strong>{coeficiente_maximo}%</strong> anual · Vida útil máxima:{" "}
          <strong>{periodo_maximo_años} años</strong>
        </p>
      </div>

      {/* Tabla de resultados */}
      {filas && (
        <>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
              Cuadro de amortización ({filas.length} ejercicios)
            </h3>
            <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              Total amortizado: {fmt(filas.reduce((s, f) => s + f.cuota, 0))}
            </span>
          </div>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <table className="w-full text-sm">
              <thead style={{ backgroundColor: "var(--secondary)" }}>
                <tr>
                  {["Año fiscal", "Cuota anual", "Valor pendiente"].map((h) => (
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
                {filas.map((f, i) => (
                  <tr
                    key={f.anio}
                    style={{
                      backgroundColor: i % 2 === 0 ? "var(--card)" : "var(--secondary)",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <td className="px-4 py-3 font-mono font-medium" style={{ color: "var(--foreground)" }}>
                      Año {f.anio}
                    </td>
                    <td className="px-4 py-3 font-mono" style={{ color: "var(--primary)" }}>
                      {fmt(f.cuota)}
                    </td>
                    <td
                      className="px-4 py-3 font-mono"
                      style={{ color: f.pendiente === 0 ? "var(--muted-foreground)" : "var(--foreground)" }}
                    >
                      {f.pendiente === 0 ? "Totalmente amortizado" : fmt(f.pendiente)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
