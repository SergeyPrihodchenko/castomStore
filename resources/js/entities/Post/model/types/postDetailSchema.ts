import { Post } from './post';

export interface PostDetailSchema {
  isLoading: boolean;
  error?: string;
  data?: Post;
}
