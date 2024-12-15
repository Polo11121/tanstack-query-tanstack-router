import { getRouteApi } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPost } from "@/queries/getPost";

const route = getRouteApi("/(main)/posts/$postId/");

export function PostPage() {
  const { postId } = route.useParams();
  const { data } = useSuspenseQuery(getPost(postId));

  return (
    <div className="p-2">
      <h3>Post {data.id}!</h3>
      <p>{data.body}</p>
    </div>
  );
}
