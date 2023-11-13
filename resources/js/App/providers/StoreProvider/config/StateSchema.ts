import { MainPageSchema } from '@/Features/Admin/AddMainPageSettings';
import { adminApi } from '@/Shared/api/admin.api';

export interface StateSchema {
  // addMainPageSettings: MainPageSchema;
  [adminApi.reducerPath]: ReturnType<typeof adminApi.reducer>;
}
