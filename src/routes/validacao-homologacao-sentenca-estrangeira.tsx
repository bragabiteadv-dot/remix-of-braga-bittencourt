import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/validacao-homologacao-sentenca-estrangeira")({
  beforeLoad: () => {
    throw redirect({
      to: "/advogado-validacao-homologacao-sentenca-estrangeira",
      statusCode: 301,
    });
  },
});
