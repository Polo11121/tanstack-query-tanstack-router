import { createLazyFileRoute } from "@tanstack/react-router";
import { PostsPage } from "@/pages/PostsPage";

export const Route = createLazyFileRoute("/(main)/posts/")({
  component: PostsPage,
});
