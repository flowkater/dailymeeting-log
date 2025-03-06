import { create } from "zustand";
import { Post } from "../domain/entities/Post";

interface PostState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (posts: Post[]) => set({ posts }),
}));
