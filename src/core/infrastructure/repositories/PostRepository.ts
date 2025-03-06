import { IPostRepository } from "../../domain/services/IPostRepository";
import { Post } from "../../domain/entities/Post";
import { injectable } from "tsyringe";

@injectable()
export class PostRepository implements IPostRepository {
  posts: Post[] = [];

  async getAllPosts(): Promise<Post[]> {
    return this.posts;
  }

  async getPostById(id: string): Promise<Post | null> {
    return this.posts.find((p) => p.id === id) || null;
  }

  async createPost(post: Post): Promise<void> {
    this.posts.push(post);
  }

  async updatePost(post: Post): Promise<void> {
    const index = this.posts.findIndex((p) => p.id === post.id);
    this.posts[index] = post;
  }

  async deletePost(id: string): Promise<void> {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
