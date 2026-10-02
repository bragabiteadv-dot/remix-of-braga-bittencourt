import { loadLandPoints, loadWorldData } from "@/lib/globe-data";

type GlobeModule = typeof import("@/components/ui/wireframe-dotted-globe");
let globeModulePromise: Promise<GlobeModule> | null = null;

export function loadGlobeModule(): Promise<GlobeModule> {
  globeModulePromise ??= import("@/components/ui/wireframe-dotted-globe").catch(
    (error: unknown) => {
      globeModulePromise = null;
      throw error;
    },
  );
  return globeModulePromise;
}

export function prepareGlobeResources(): void {
  void Promise.allSettled([loadGlobeModule(), loadWorldData(), loadLandPoints()]);
}