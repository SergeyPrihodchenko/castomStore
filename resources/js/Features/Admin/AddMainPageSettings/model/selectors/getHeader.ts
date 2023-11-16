import { StateSchema } from '@/App/providers/StoreProvider';

export const getHeader = (state: StateSchema) => state.MainPageSettings.current_settings.header;
