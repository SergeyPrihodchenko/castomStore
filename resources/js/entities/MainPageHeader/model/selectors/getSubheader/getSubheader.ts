import { StateSchema } from '@/App/providers/StoreProvider';

export const getSubheader = (state: StateSchema) => state.mainPage.data[2].title;
