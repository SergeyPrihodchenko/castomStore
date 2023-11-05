import { StateSchema } from '@/App/providers/StoreProvider';

export const getPostTitle = (state: StateSchema) =>
  state.postDetail?.data?.title || 'default title';
