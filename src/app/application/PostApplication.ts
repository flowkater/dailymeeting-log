import type { IPostRepository } from "../domain/services/IPostRepository";
import { Post } from "../domain/entities/Post";
import { v4 as uuidv4 } from "uuid";
import { inject, injectable } from "tsyringe";

@injectable()
export class PostApplication {
  constructor(
    @inject("IPostRepository")
    private readonly postRepository: IPostRepository
  ) {}

  async fetchAllPosts(): Promise<Post[]> {
    return this.postRepository.getAllPosts();
  }

  async createPost(content: string): Promise<void> {
    const post = new Post(uuidv4(), content, new Date(), new Date());
    await this.postRepository.createPost(post);
  }

  async updatePost(postId: string, content: string): Promise<void> {
    const post = await this.postRepository.getPostById(postId);
    if (!post) {
      throw new Error("Post not found");
    }

    post.updateContent(content);
    await this.postRepository.updatePost(post);
  }

  async deletePost(postId: string): Promise<void> {
    await this.postRepository.deletePost(postId);
  }
}
