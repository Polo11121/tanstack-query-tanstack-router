import { createFileRoute } from "@tanstack/react-router";
import { getPost } from "@/queries/getPost";

export const Route = createFileRoute("/(main)/posts/$postId/")({
  loader: async ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData(getPost(params.postId)),
});
