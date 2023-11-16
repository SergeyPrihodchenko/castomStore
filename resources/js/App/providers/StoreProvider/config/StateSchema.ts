import { MainPageSchema } from '@/Features/Admin/AddMainPageSettings';
import { queryCatalogs } from '@/Features/Admin/CatalogsPanel/model/reducers/query/rtkCatalogs';
import { SchemaCatalogs } from '@/Features/Admin/CatalogsPanel/model/types/types';
import { productApi } from '@/entities/Product/model/slice/productApi';

export interface StateSchema {
  addMainPageSettings: MainPageSchema;
  CatalogsPanel: SchemaCatalogs;
  [queryCatalogs.reducerPath]: ReturnType<typeof queryCatalogs.reducer>;
  [productApi.reducerPath]: ReturnType<typeof productApi.reducer>;
}
