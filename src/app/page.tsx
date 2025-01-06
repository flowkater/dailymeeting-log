"use client";
import "reflect-metadata";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePostStore } from "./store/store";
import { PostApplication } from "./application/PostApplication";
import { container } from "./infrastructure/di/container";
import { TopSection } from "./components/top-section";
import { FilterSection } from "./components/filter-section";
import { CommentSection } from "./components/comment-section";
import { CommentViewModel } from "./components/view-models/CommentViewModel";
import { HeaderSection } from "./components/header-section";

const MOCK_COMMENTS: CommentViewModel[] = [
  {
    id: "1",
    author: {
      id: "1",
      name: "성민님",
      username: "성민#1234",
      avatar: "/placeholder.svg",
    },
    content:
      "이번달 말씨 2025년 새해가 밝았어요. 올 한 해도 건강하고 행복하게 보내세요!",
    likes: 5,
    replies: [
      {
        id: "1-1",
        author: {
          id: "2",
          name: "김태현",
          username: "김태현#5678",
          avatar: "/placeholder.svg",
        },
        content: "새해 복 많이 받으세요!",
        likes: 0,
        replies: [],
        createdAt: "1일 전",
      },
    ],
    createdAt: "1일 전",
  },
  {
    id: "2",
    author: {
      id: "2",
      name: "김태현",
      username: "김태현#5678",
      avatar: "/placeholder.svg",
    },
    content:
      "이번달 말씨 2025년 새해가 밝았어요. 올 한 해도 건강하고 행복하게 보내세요!",
    likes: 3,
    replies: [],
    createdAt: "1일 전",
  },
];

export default function Home() {
  const router = useRouter();
  const { posts, setPosts } = usePostStore();
  const postApp = container.resolve(PostApplication);

  const fetchPosts = async () => {
    try {
      const data = await postApp.fetchAllPosts();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // 세션 체크 로직 등
    // if not session -> router.push('/auth')
    fetchPosts();
  }, []);

  const handleCreatePost = async () => {
    const content = prompt("Enter post content");
    if (!content) return;
    await postApp.createPost(content);
    fetchPosts(); // or, realtime 구독으로 대체
  };

  const handleUpdatePost = async (id: string) => {
    const content = prompt("New content");
    if (!content) return;
    await postApp.updatePost(id, content);
    fetchPosts();
  };

  const handleDeletePost = async (id: string) => {
    await postApp.deletePost(id);
    fetchPosts();
  };

  return (
    <div>
      <HeaderSection />

      <div className="max-w-4xl mx-auto p-4">
        <TopSection />
        <FilterSection />
        <div className="mt-6">
          <CommentSection comments={MOCK_COMMENTS} />
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-4">메인 페이지</h1>
          <button
            onClick={handleCreatePost}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
          >
            새 게시물
          </button>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="border p-4 rounded">
                <p className="mb-2">{post.content}</p>
                <small className="text-gray-500">
                  {post.createdAt.toISOString()}
                </small>
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleUpdatePost(post.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
