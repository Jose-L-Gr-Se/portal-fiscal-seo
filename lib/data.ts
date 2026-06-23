export const aeatData = [
  { id_elemento: "edificios-construcciones", codigo_aeat: "EDS-01", nombre_elemento: "Edificios y otras construcciones", categoria: "inmuebles", coeficiente_maximo: 3.0, periodo_maximo_años: 68 },
  { id_elemento: "instalaciones-mobiliario", codigo_aeat: "EDS-02", nombre_elemento: "Instalaciones, mobiliario y enseres", categoria: "mobiliario", coeficiente_maximo: 10.0, periodo_maximo_años: 20 },
  { id_elemento: "maquinaria", codigo_aeat: "EDS-03", nombre_elemento: "Maquinaria", categoria: "maquinaria", coeficiente_maximo: 12.0, periodo_maximo_años: 18 },
  { id_elemento: "elementos-transporte", codigo_aeat: "EDS-04", nombre_elemento: "Elementos de transporte (vehículos)", categoria: "vehiculos", coeficiente_maximo: 16.0, periodo_maximo_años: 14 },
  { id_elemento: "equipos-informaticos", codigo_aeat: "EDS-06", nombre_elemento: "Equipos para tratamiento de la información", categoria: "tecnologia", coeficiente_maximo: 26.0, periodo_maximo_años: 10 },
  { id_elemento: "sistemas-programas", codigo_aeat: "EDS-06-B", nombre_elemento: "Sistemas y programas informáticos", categoria: "software", coeficiente_maximo: 33.0, periodo_maximo_años: 6 },
  { id_elemento: "utiles-herramientas", codigo_aeat: "EDS-07", nombre_elemento: "Útiles y herramientas", categoria: "herramientas", coeficiente_maximo: 30.0, periodo_maximo_años: 8 },
  { id_elemento: "bienes-intangibles", codigo_aeat: "EDS-10", nombre_elemento: "Bienes de inmovilizado intangible", categoria: "intangibles", coeficiente_maximo: 15.0, periodo_maximo_años: 10 },
];

export type AeatElemento = (typeof aeatData)[number];
