import { createIsomorphicFn } from "@tanstack/react-start";

/**
 * Define o status HTTP da resposta durante o SSR.
 * No cliente é um no-op (navegação client-side não tem status HTTP).
 */
export const setHttpStatus = createIsomorphicFn()
  .client((_status: number) => {})
  .server(async (status: number) => {
    const { setResponseStatus } = await import("@tanstack/react-start/server");
    setResponseStatus(status);
  });
