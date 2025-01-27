import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(main)/about/")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <h3>About!</h3>
    </div>
  );
}
