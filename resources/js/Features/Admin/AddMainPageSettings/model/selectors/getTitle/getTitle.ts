import { StateSchema } from '@/App/providers/StoreProvider';

export const getTitle = (state: StateSchema) => state.addMainPageSettings.data[0].title;
