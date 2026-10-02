type GlobeModule = typeof import("@/components/ui/wireframe-dotted-globe");
let globeModulePromise: Promise<GlobeModule> | null = null;
export interface GeoJsonFeature {
  type: string;
  geometry: any;
  properties?: any;
}
export interface GeoJsonFeatureCollection {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
}
let worldDataPromise: Promise<GeoJsonFeatureCollection> | null = null;
let landPointsPromise: Promise<[number, number][]> | null = null;
function fetchJson<T>(url: string, reset: () => void): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error("Não foi possível carregar o mapa");
    return response.json() as Promise<T>;
  }).catch((error: unknown) => {
    reset();
    throw error;
  });
}
export function loadGlobeModule() {
  globeModulePromise ??= import("@/components/ui/wireframe-dotted-globe").catch((error: unknown) => {
    globeModulePromise = null;
    throw error;
  });
  return globeModulePromise;
}
export function loadWorldData(): Promise<GeoJsonFeatureCollection> {
  worldDataPromise ??= fetchJson<GeoJsonFeatureCollection>("/data/world-land.json", () => {
    worldDataPromise = null;
  });
  return worldDataPromise;
}
export function loadLandPoints() {
  landPointsPromise ??= fetchJson<[number, number][]>("/data/world-land-points.json", () => {
    landPointsPromise = null;
  });
  return landPointsPromise;
}
export function prepareGlobeResources() {
  void loadGlobeModule();
  void loadWorldData();
  void loadLandPoints();
}
