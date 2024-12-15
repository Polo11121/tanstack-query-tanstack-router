import { createLazyFileRoute } from "@tanstack/react-router";
import { PostPage } from "@/pages/PostPage";

export const Route = createLazyFileRoute("/(main)/posts/$postId/")({
  component: PostPage,
});
