import { MainPageSchema } from '@/Features/Admin/AddMainPageSettings';
import { queryCatalogs } from '@/Features/Admin/CatalogsPanel/model/reducers/query/rtkCatalogs';
import { SchemaCatalogs } from '@/Features/Admin/CatalogsPanel/model/types/types';

export interface StateSchema {
  addMainPageSettings: MainPageSchema;
  CatalogsPanel: SchemaCatalogs;
  [queryCatalogs.reducerPath]: ReturnType<typeof queryCatalogs.reducer>;
}
