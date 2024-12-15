import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

export const getPost = (postId: string) =>
  queryOptions({
    queryKey: ["post", postId],
    queryFn: async () => {
      const { data } = await axios.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      return data;
    },
  });
