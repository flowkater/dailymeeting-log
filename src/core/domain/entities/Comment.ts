export class Comment {
  constructor(
    public readonly id: string,
    public readonly postId: string,
    public readonly author: {
      id: string;
      name: string;
      username: string;
      avatar: string;
    },
    public readonly likes: number,
    public readonly replies: Comment[],

    public content: string,
    public readonly userId: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  updateContent(newContent: string) {
    this.content = newContent;
  }
}
