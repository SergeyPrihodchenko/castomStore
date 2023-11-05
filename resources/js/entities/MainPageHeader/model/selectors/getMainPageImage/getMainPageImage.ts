import { StateSchema } from '@/App/providers/StoreProvider';

export const getMainPageImage = (state: StateSchema) => state.mainPage.data[3].img_path;
