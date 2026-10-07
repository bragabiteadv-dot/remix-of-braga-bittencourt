import { QueryClient } from "@tanstack/react-query";
import { createRouter, type AnyRoute } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Preserve the complete runtime tree and individual file-route types, but avoid
// expanding thousands of page paths into every global navigation prop type.
const runtimeRouteTree: AnyRoute = routeTree;

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree: runtimeRouteTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
