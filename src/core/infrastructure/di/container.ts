import "reflect-metadata";
import { container } from "tsyringe";
import { IPostRepository } from "../../domain/services/IPostRepository";
import { PostRepository } from "../repositories/PostRepository";

container.registerSingleton<IPostRepository>("IPostRepository", PostRepository);

export { container };
