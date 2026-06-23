import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Portal Fiscal SEO. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
        Política de Privacidad
      </h1>
      <p className="mb-10 text-sm" style={{ color: "var(--muted-foreground)" }}>
        Última actualización: junio de 2026
      </p>

      <div className="space-y-8 text-sm leading-7" style={{ color: "var(--foreground)" }}>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>1. Responsable del tratamiento</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa que el
            responsable del tratamiento de los datos personales recabados a través de este sitio web es{" "}
            <strong style={{ color: "var(--foreground)" }}>Portal Fiscal SEO</strong>, con domicilio en Madrid, España
            (correo: privacidad@portalfiscalseo.es).
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>2. Datos que recabamos y finalidad</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            Este sitio web <strong style={{ color: "var(--foreground)" }}>no recaba datos personales de forma directa</strong>.
            Las herramientas de cálculo funcionan íntegramente en el navegador del usuario y los valores introducidos
            (importe de activos, etc.) no se transmiten ni almacenan en ningún servidor.
          </p>
          <p className="mt-3" style={{ color: "var(--muted-foreground)" }}>
            No obstante, se recaban de forma automática e indirecta los siguientes datos a través de servicios de
            terceros:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1" style={{ color: "var(--muted-foreground)" }}>
            <li><strong style={{ color: "var(--foreground)" }}>Datos de navegación:</strong> dirección IP, navegador, sistema operativo, páginas visitadas y tiempo de visita, recabados por Google Analytics (si aplica) con fines estadísticos.</li>
            <li><strong style={{ color: "var(--foreground)" }}>Cookies publicitarias:</strong> Google AdSense puede instalar cookies para mostrar publicidad personalizada (véase la sección de Cookies).</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>3. Base jurídica del tratamiento</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            La base jurídica del tratamiento de datos de navegación es el <strong style={{ color: "var(--foreground)" }}>interés legítimo</strong> del
            titular (art. 6.1.f RGPD) para el análisis del tráfico web y la mejora del servicio. El tratamiento de
            datos con fines publicitarios (cookies de AdSense) se basa en el <strong style={{ color: "var(--foreground)" }}>consentimiento</strong> del
            usuario (art. 6.1.a RGPD), prestado a través del banner de cookies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>4. Destinatarios y transferencias internacionales</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            Los datos de navegación pueden ser comunicados a <strong style={{ color: "var(--foreground)" }}>Google LLC</strong> (EE.UU.)
            en calidad de encargado del tratamiento, al amparo de las Cláusulas Contractuales Estándar aprobadas por la
            Comisión Europea. No se realizan otras cesiones a terceros salvo obligación legal.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>5. Plazo de conservación</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            Los datos de navegación se conservan durante un máximo de <strong style={{ color: "var(--foreground)" }}>26 meses</strong> conforme
            a la configuración estándar de Google Analytics, transcurridos los cuales son eliminados o anonimizados.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>6. Derechos del usuario</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            El usuario puede ejercer en cualquier momento los derechos de <strong style={{ color: "var(--foreground)" }}>acceso, rectificación,
            supresión, oposición, limitación del tratamiento y portabilidad</strong> dirigiéndose al correo{" "}
            <a href="mailto:privacidad@portalfiscalseo.es" className="underline" style={{ color: "var(--primary)" }}>
              privacidad@portalfiscalseo.es
            </a>
            . Asimismo, tiene derecho a presentar una reclamación ante la{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--primary)" }}
            >
              Agencia Española de Protección de Datos (AEPD)
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>7. Seguridad</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            El titular ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los
            datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, conforme a lo
            establecido en el RGPD y la LOPDGDD.
          </p>
        </section>

      </div>
    </div>
  );
}
