export interface GlobeFeatureCollection {
  type: "FeatureCollection";
  features: Array<{
    type: string;
    geometry: unknown;
    properties?: Record<string, unknown>;
  }>;
}

export type GlobePoint = [number, number];

let worldDataPromise: Promise<GlobeFeatureCollection> | null = null;
let landPointsPromise: Promise<GlobePoint[]> | null = null;

function fetchJson<T>(url: string, reset: () => void): Promise<T> {
  return fetch(url, { cache: "force-cache" })
    .then((response) => {
      if (!response.ok) throw new Error("Não foi possível carregar o mapa");
      return response.json() as Promise<T>;
    })
    .catch((error: unknown) => {
      reset();
      throw error;
    });
}

export function loadWorldData(): Promise<GlobeFeatureCollection> {
  worldDataPromise ??= fetchJson<GlobeFeatureCollection>("/data/world-land.json", () => {
    worldDataPromise = null;
  });
  return worldDataPromise;
}

export function loadLandPoints(): Promise<GlobePoint[]> {
  landPointsPromise ??= fetchJson<GlobePoint[]>("/data/world-land-points.json", () => {
    landPointsPromise = null;
  });
  return landPointsPromise;
}