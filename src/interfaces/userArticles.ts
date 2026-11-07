import type { ISpecification } from ".";

export type UserArticleStatus = 'PRIVATE' | 'PUBLIC' | 'FRIENDS';

export interface IUserArticle {
  id: number;
  content: string;
  images: string | null;
  videos: string | null;
  status: UserArticleStatus;
  isActive: boolean;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IUserArticlesFind extends ISpecification {
  content?: string;
  status?: UserArticleStatus;
  userId?: number;
  userName?: string;
  isActive?: boolean;
}

// The owner is always the logged-in user; the API takes no userId
export interface IUserArticleCreate {
  content: string;
  status: UserArticleStatus;
}

export interface IUserArticleUpdate {
  content?: string;
  status?: UserArticleStatus;
}

export interface IUserArticlesState {
  userArticles: IUserArticle[];
  totalPages: number;
}
