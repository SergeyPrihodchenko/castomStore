import { StateSchema } from '@/App/providers/StoreProvider';

export const getPostBody = (state: StateSchema) => state?.postDetail?.data?.body;
