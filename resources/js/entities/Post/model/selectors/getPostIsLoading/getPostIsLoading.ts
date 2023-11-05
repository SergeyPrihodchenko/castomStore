import { StateSchema } from '@/App/providers/StoreProvider';

export const getPostIsLoading = (state: StateSchema) => state.postDetail?.isLoading;
