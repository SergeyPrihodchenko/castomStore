import { StateSchema } from '@/App/providers/StoreProvider';

export const getFields = (state: StateSchema) => state.addMainPageSettings;
