import { createFileRoute } from "@tanstack/react-router";
import { BeloHorizonteIndex } from "./belo-horizonte";

export const Route = createFileRoute("/belo-horizonte/")({
  component: BeloHorizonteIndex,
});
