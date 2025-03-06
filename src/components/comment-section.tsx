import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, ThumbsUp, MoreHorizontal } from "lucide-react";
import {
  CommentViewModel,
  toCommentViewModel,
} from "./view-models/CommentViewModel";

interface CommentSectionProps {
  comments: CommentViewModel[];
}

export function CommentSection({ comments }: CommentSectionProps) {
  const [showReplies, setShowReplies] = useState<Record<string, boolean>>({});

  const toggleReplies = (commentId: string) => {
    setShowReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="border rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={comment.author.avatar} />
              <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-sm text-gray-500">
                    @{comment.author.username}
                  </span>
                  <span className="text-sm text-gray-400">
                    {comment.createdAt.toString()}
                  </span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-gray-800 mb-3">{comment.content}</p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  {comment.likes}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500"
                  onClick={() => toggleReplies(comment.id)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {comment.replies.length}
                </Button>
              </div>

              {/* Replies */}
              {showReplies[comment.id] && comment.replies.length > 0 && (
                <div className="mt-4 pl-4 border-l space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={reply.author.avatar} />
                        <AvatarFallback>{reply.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">
                            {reply.author.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            @{reply.author.username}
                          </span>
                          <span className="text-sm text-gray-400">
                            {reply.createdAt.toString()}
                          </span>
                        </div>
                        <p className="text-gray-800">{reply.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Reply Input */}
              {showReplies[comment.id] && (
                <div className="mt-4">
                  <Textarea
                    placeholder="답글을 입력하세요..."
                    className="min-h-[80px] mb-2"
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">취소</Button>
                    <Button>답글 작성</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
