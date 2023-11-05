import { StateSchema } from '@/App/providers/StoreProvider';

export const getPost = (state: StateSchema) => state?.postDetail;
