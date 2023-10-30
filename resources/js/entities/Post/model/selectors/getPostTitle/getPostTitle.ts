import { createSelector } from '@reduxjs/toolkit';
import { getPost } from '../getPost/getPost';
import { PostDetailSchema } from '../../types/postDetailSchema';

export const getCounterValue = createSelector(
  getPost,
  (post: PostDetailSchema) => post.data?.title,
);
