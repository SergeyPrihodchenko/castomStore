import { StateSchema } from '@/App/providers/StoreProvider';

export const getTitleList = (state: StateSchema) => state.addMainPageSettings.data[4].all_title;
