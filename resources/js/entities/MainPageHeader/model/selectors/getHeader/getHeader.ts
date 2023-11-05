import { StateSchema } from '@/App/providers/StoreProvider';

export const getHeader = (state: StateSchema) => state.mainPage.data[1].header;
