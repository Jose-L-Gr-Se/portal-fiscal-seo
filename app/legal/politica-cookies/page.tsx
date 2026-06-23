import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Portal Fiscal SEO conforme a la LSSI y el RGPD. Información sobre los tipos de cookies utilizadas y cómo gestionarlas.",
  robots: { index: false, follow: false },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
        Política de Cookies
      </h1>
      <p className="mb-10 text-sm" style={{ color: "var(--muted-foreground)" }}>
        Última actualización: junio de 2026
      </p>

      <div className="space-y-8 text-sm leading-7" style={{ color: "var(--foreground)" }}>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>1. ¿Qué son las cookies?</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario al
            visitarlos. Se utilizan para que el sitio funcione correctamente, recordar preferencias, analizar el tráfico
            y mostrar publicidad relevante. La presente política se aplica al sitio web{" "}
            <strong style={{ color: "var(--foreground)" }}>portal-fiscal-seo.vercel.app</strong> conforme al artículo
            22.2 de la LSSI-CE y el RGPD.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>2. Tipos de cookies que utilizamos</h2>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <table className="w-full text-xs">
              <thead style={{ backgroundColor: "var(--secondary)" }}>
                <tr>
                  {["Tipo", "Nombre / Proveedor", "Finalidad", "Duración"].map((h) => (
                    <th key={h} className="px-3 py-3 text-left font-semibold uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { tipo: "Técnica", nombre: "cookie_consent (propio)", finalidad: "Guarda la aceptación del banner de cookies", duracion: "1 año" },
                  { tipo: "Analítica", nombre: "_ga, _gid (Google Analytics)", finalidad: "Análisis de tráfico web anónimo", duracion: "2 años / 24h" },
                  { tipo: "Publicitaria", nombre: "IDE, DSID (Google AdSense)", finalidad: "Publicidad personalizada basada en intereses", duracion: "13 meses" },
                  { tipo: "Publicitaria", nombre: "NID (Google)", finalidad: "Segmentación de anuncios de Display", duracion: "6 meses" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--border)", backgroundColor: i % 2 === 0 ? "var(--card)" : "var(--secondary)" }}>
                    <td className="px-3 py-3 font-medium" style={{ color: "var(--foreground)" }}>{row.tipo}</td>
                    <td className="px-3 py-3 font-mono" style={{ color: "var(--muted-foreground)" }}>{row.nombre}</td>
                    <td className="px-3 py-3" style={{ color: "var(--muted-foreground)" }}>{row.finalidad}</td>
                    <td className="px-3 py-3" style={{ color: "var(--muted-foreground)" }}>{row.duracion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>3. Cookies de terceros</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            Este sitio utiliza <strong style={{ color: "var(--foreground)" }}>Google AdSense</strong> para la
            monetización mediante publicidad. Google puede instalar cookies en el dispositivo del usuario para mostrar
            anuncios basados en sus intereses. Portal Fiscal SEO no controla dichas cookies. Para más información y para
            gestionar las preferencias publicitarias de Google, visite:{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--primary)" }}
            >
              adssettings.google.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>4. Base jurídica y consentimiento</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            Las cookies técnicas no requieren consentimiento al ser estrictamente necesarias para el funcionamiento del
            sitio (art. 22.2 LSSI-CE). Las cookies analíticas y publicitarias requieren el{" "}
            <strong style={{ color: "var(--foreground)" }}>consentimiento previo e informado</strong> del usuario,
            prestado a través del banner que se muestra al acceder al Sitio por primera vez.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>5. Cómo gestionar o deshabilitar las cookies</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            El usuario puede retirar su consentimiento en cualquier momento y gestionar las cookies desde la
            configuración de su navegador:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1" style={{ color: "var(--muted-foreground)" }}>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--primary)" }}>Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--primary)" }}>Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--primary)" }}>Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--primary)" }}>Microsoft Edge</a></li>
          </ul>
          <p className="mt-3" style={{ color: "var(--muted-foreground)" }}>
            La deshabilitación de ciertas cookies puede afectar al correcto funcionamiento de algunas funcionalidades
            del Sitio.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>6. Actualización de esta política</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            El titular se reserva el derecho de modificar la presente política para adaptarla a cambios legislativos,
            jurisprudenciales o técnicos. Se notificará al usuario cualquier cambio relevante mediante la actualización
            de la fecha indicada al inicio de este documento.
          </p>
        </section>

      </div>
    </div>
  );
}
