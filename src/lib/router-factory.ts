import { QueryClient } from "@tanstack/react-query";
import { createRouter, type AnyRoute } from "@tanstack/react-router";

// Keep the registered router type independent of the generated file-route tree.
export function createApplicationRouter(routeTree: AnyRoute) {
  return createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
}

export type ApplicationRouter = ReturnType<typeof createApplicationRouter>;