import { StateSchema } from '@/App/providers/StoreProvider';

export const getHeader = (state: StateSchema) => state.addMainPageSettings.data[1].header;
