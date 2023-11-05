import { StateSchema } from '@/App/providers/StoreProvider';

export const getPostError = (state: StateSchema) => state.postDetail?.error;
