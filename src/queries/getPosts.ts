import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

export const getPosts = queryOptions({
  queryKey: ["posts"],
  queryFn: async () => {
    const { data } = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return data;
  },
});
