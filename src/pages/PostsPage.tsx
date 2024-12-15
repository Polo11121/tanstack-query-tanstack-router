import { getPosts } from "@/queries/getPosts";
import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

export function PostsPage() {
  const { data } = useSuspenseQuery(getPosts);

  return (
    <div className="p-2">
      <h3>Posts!</h3>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link to="/posts/$postId" params={{ postId: post.id }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
