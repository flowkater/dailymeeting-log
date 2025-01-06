import { Post } from "../entities/Post";

export interface IPostRepository {
  getAllPosts(): Promise<Post[]>;
  getPostById(id: string): Promise<Post | null>;
  createPost(post: Post): Promise<void>;
  updatePost(post: Post): Promise<void>;
  deletePost(id: string): Promise<void>;
}
