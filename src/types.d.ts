export {};

declare global {
  type Post = {
    userId: number;
    id: string;
    title: string;
    body: string;
  };
}
