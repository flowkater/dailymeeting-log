export class Post {
  constructor(
    public readonly id: string, 
    public content: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}


  updateContent(content: string) {
    this.content = content;
    this.updatedAt = new Date();
  }
}

