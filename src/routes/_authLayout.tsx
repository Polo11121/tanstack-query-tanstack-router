import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authLayout")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/register" className="[&.active]:font-bold">
          Register
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
