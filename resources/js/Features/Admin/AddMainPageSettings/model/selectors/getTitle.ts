import { StateSchema } from '@/App/providers/StoreProvider';

export const getTitle = (state: StateSchema) => state.MainPageSettings.current_settings.title;
