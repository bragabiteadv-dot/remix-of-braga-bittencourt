import { createApplicationRouter, type ApplicationRouter } from "./lib/router-factory";
import type { AnyRoute } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.mts";

// Explicit return type breaks the generated registration's inference cycle.
export const getRouter = (): ApplicationRouter => createApplicationRouter(routeTree as unknown as AnyRoute);
