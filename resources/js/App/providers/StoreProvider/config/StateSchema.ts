import { MainPageSchema } from '@/Features/Admin/AddMainPageSettings';
import { queryMainPageSettings } from '@/Features/Admin/AddMainPageSettings/model/services/query/rtkMainPageSettings';
import { queryCatalogs } from '@/Features/Admin/CatalogsPanel/model/reducers/query/rtkCatalogs';
import { SchemaCatalogs } from '@/Features/Admin/CatalogsPanel/model/types/types';
import { productApi } from '@/entities/Product/model/slice/productApi';

export interface StateSchema {
  CatalogsPanel: SchemaCatalogs;
  [queryCatalogs.reducerPath]: ReturnType<typeof queryCatalogs.reducer>;
  [queryMainPageSettings.reducerPath]: ReturnType<typeof queryMainPageSettings.reducer>;
  [productApi.reducerPath]: ReturnType<typeof productApi.reducer>;
}
