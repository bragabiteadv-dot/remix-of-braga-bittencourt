import { createFileRoute } from "@tanstack/react-router";
import { BetimIndex } from "./betim";

export const Route = createFileRoute("/betim/")({
  component: BetimIndex,
});
