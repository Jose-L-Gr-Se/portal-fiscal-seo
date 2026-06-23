import type { MetadataRoute } from "next";
import { aeatData } from "@/lib/data";

const BASE_URL = "https://portal-fiscal-seo.vercel.app";
const ID_REGIMEN = "estimacion-directa-simplificada";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/herramientas/amortizacion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Una URL de categoría por cada categoría única
  const categorias = [...new Set(aeatData.map((e) => e.categoria))];
  const categoriaRoutes: MetadataRoute.Sitemap = categorias.map((cat) => ({
    url: `${BASE_URL}/herramientas/amortizacion/${cat}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Las 8 rutas pSEO de elemento + régimen
  const elementoRoutes: MetadataRoute.Sitemap = aeatData.map((elem) => ({
    url: `${BASE_URL}/herramientas/amortizacion/${elem.categoria}/${elem.id_elemento}/${ID_REGIMEN}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoriaRoutes, ...elementoRoutes];
}
