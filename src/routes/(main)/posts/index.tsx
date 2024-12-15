import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "@/queries/getPosts";

export const Route = createFileRoute("/(main)/posts/")({
  loader: async ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(getPosts),
});
