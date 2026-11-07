import type { ISpecification } from ".";

export interface IGroupTaskSubmission {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  images: string | null;
  videos: string | null;
  materials: string | null;
  comment: string | null;
  isActive: boolean;
  groupTaskId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IGroupTaskSubmissionsFind extends ISpecification {
  name?: string;
  groupTaskId?: number;
  groupTaskName?: string;
  userId?: number;
  userName?: string;
  isActive?: boolean;
}

// The owner is always the logged-in user; the API takes no userId
export interface IGroupTaskSubmissionCreate {
  name: string;
  description?: string;
  comment?: string;
  groupTaskId: number;
}

export interface IGroupTaskSubmissionUpdate {
  name?: string;
  description?: string;
  comment?: string;
  groupTaskId?: number;
}

export interface IGroupTaskSubmissionsState {
  groupTaskSubmissions: IGroupTaskSubmission[];
  totalPages: number;
}
