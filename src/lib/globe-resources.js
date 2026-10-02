"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadGlobeModule = loadGlobeModule;
exports.loadWorldData = loadWorldData;
exports.loadLandPoints = loadLandPoints;
exports.prepareGlobeResources = prepareGlobeResources;
var globeModulePromise = null;
var worldDataPromise = null;
var landPointsPromise = null;
function fetchJson(url, reset) {
    return fetch(url).then(function (response) {
        if (!response.ok)
            throw new Error("Não foi possível carregar o mapa");
        return response.json();
    }).catch(function (error) {
        reset();
        throw error;
    });
}
function loadGlobeModule() {
    globeModulePromise !== null && globeModulePromise !== void 0 ? globeModulePromise : (globeModulePromise = Promise.resolve().then(function () { return require("@/components/ui/wireframe-dotted-globe"); }).catch(function (error) {
        globeModulePromise = null;
        throw error;
    }));
    return globeModulePromise;
}
function loadWorldData() {
    worldDataPromise !== null && worldDataPromise !== void 0 ? worldDataPromise : (worldDataPromise = fetchJson("/data/world-land.json", function () {
        worldDataPromise = null;
    }));
    return worldDataPromise;
}
function loadLandPoints() {
    landPointsPromise !== null && landPointsPromise !== void 0 ? landPointsPromise : (landPointsPromise = fetchJson("/data/world-land-points.json", function () {
        landPointsPromise = null;
    }));
    return landPointsPromise;
}
function prepareGlobeResources() {
    void loadGlobeModule();
    void loadWorldData();
    void loadLandPoints();
}
