import { StateSchema } from '@/App/providers/StoreProvider';

export const getMainPageTitle = (state: StateSchema) => state.mainPage.data[0].title;
