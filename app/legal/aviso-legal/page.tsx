import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Portal Fiscal SEO. Información sobre el titular del sitio web, condiciones de uso y responsabilidades.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
        Aviso Legal
      </h1>
      <p className="mb-10 text-sm" style={{ color: "var(--muted-foreground)" }}>
        Última actualización: junio de 2026
      </p>

      <div className="space-y-8 text-sm leading-7" style={{ color: "var(--foreground)" }}>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>1. Identificación del titular</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), se informa que el presente sitio web{" "}
            <strong style={{ color: "var(--foreground)" }}>portal-fiscal-seo.vercel.app</strong> (en adelante, "el
            Sitio") es titularidad de:
          </p>
          <div
            className="mt-3 rounded-lg border p-4 text-sm"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--secondary)", color: "var(--muted-foreground)" }}
          >
            <p><strong style={{ color: "var(--foreground)" }}>Titular:</strong> Portal Fiscal SEO</p>
            <p><strong style={{ color: "var(--foreground)" }}>Domicilio social:</strong> Madrid, España</p>
            <p><strong style={{ color: "var(--foreground)" }}>Correo electrónico de contacto:</strong> legal@portalfiscalseo.es</p>
            <p><strong style={{ color: "var(--foreground)" }}>Jurisdicción:</strong> España (Comunidad de Madrid)</p>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>2. Objeto y condiciones de uso</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            El Sitio pone a disposición de los usuarios herramientas de cálculo fiscal orientativas basadas en la
            normativa vigente de la Agencia Estatal de Administración Tributaria (AEAT). El acceso y uso del Sitio
            implica la aceptación plena de las presentes condiciones. El usuario se compromete a hacer un uso lícito y
            diligente del Sitio, absteniéndose de utilizarlo con fines ilícitos o contrarios al ordenamiento jurídico.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>3. Carácter informativo y exención de responsabilidad</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            Los contenidos del Sitio tienen carácter meramente <strong style={{ color: "var(--foreground)" }}>informativo y orientativo</strong>.
            No constituyen asesoramiento fiscal, jurídico, contable ni financiero profesional. El titular del Sitio no
            asume ninguna responsabilidad derivada del uso de las herramientas de cálculo ni de las decisiones adoptadas
            por el usuario basándose en los resultados obtenidos. Se recomienda siempre consultar con un asesor fiscal
            colegiado antes de aplicar cualquier coeficiente o criterio fiscal en declaraciones tributarias.
          </p>
          <p className="mt-3" style={{ color: "var(--muted-foreground)" }}>
            Los datos fiscales provienen de fuentes oficiales (AEAT, BOE) y se actualizan periódicamente, pero el
            titular no garantiza su exactitud, completitud o actualidad en todo momento.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>4. Propiedad intelectual e industrial</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            El diseño, código fuente, textos, logotipos y demás elementos del Sitio son propiedad del titular o de
            terceros que han autorizado su uso, y están protegidos por la legislación española e internacional sobre
            propiedad intelectual e industrial. Queda expresamente prohibida su reproducción, distribución,
            comunicación pública o transformación sin autorización previa y por escrito del titular.
          </p>
          <p className="mt-3" style={{ color: "var(--muted-foreground)" }}>
            Los datos normativos de la AEAT (tablas de amortización, coeficientes, normativa) son de dominio público
            conforme a la normativa vigente sobre reutilización de la información del sector público (RD 1495/2011).
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>5. Publicidad</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            El Sitio puede mostrar publicidad a través de Google AdSense u otras redes publicitarias. Los anuncios son
            gestionados por terceros y el titular no controla su contenido. Para más información sobre cómo Google
            utiliza los datos con fines publicitarios, consulte la{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--primary)" }}
            >
              Política de privacidad de Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold" style={{ color: "var(--foreground)" }}>6. Legislación aplicable y jurisdicción</h2>
          <p style={{ color: "var(--muted-foreground)" }}>
            Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier
            controversia derivada del uso del Sitio, las partes se someten, con renuncia expresa a cualquier otro
            fuero, a los Juzgados y Tribunales de la ciudad de Madrid.
          </p>
        </section>

      </div>
    </div>
  );
}
