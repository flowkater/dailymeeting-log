import { Comment } from "@/app/domain/entities/Comment";

export interface CommentViewModel {
  id: string;
  author: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  likes: number;
  replies: CommentViewModel[];
  createdAt: string; // "2일 전" 같은 상대적 시간
  isEditing?: boolean;
  isLiked?: boolean;
}

export function toCommentViewModel(comment: Comment): CommentViewModel {
  return {
    id: comment.id,
    author: comment.author,
    content: comment.content,
    likes: comment.likes,
    replies: comment.replies.map(toCommentViewModel),
    createdAt: getRelativeTimeString(comment.createdAt),
    isEditing: false,
    isLiked: false,
  };
}

function getRelativeTimeString(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInDays = Math.floor(diffInSeconds / (60 * 60 * 24));

  if (diffInDays === 0) {
    return "오늘";
  } else if (diffInDays === 1) {
    return "어제";
  } else {
    return `${diffInDays}일 전`;
  }
}
