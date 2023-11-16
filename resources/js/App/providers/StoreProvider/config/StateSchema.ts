import { MainPageSchema } from '@/Features/Admin/AddMainPageSettings';
import { queryMainPageSettings } from '@/Features/Admin/AddMainPageSettings/model/services/query/rtkMainPageSettings';
import { queryCatalogs } from '@/Features/Admin/CatalogsPanel/model/reducers/query/rtkCatalogs';
import { SchemaCatalogs } from '@/Features/Admin/CatalogsPanel/model/types/types';

export interface StateSchema {
  CatalogsPanel: SchemaCatalogs;
  [queryCatalogs.reducerPath]: ReturnType<typeof queryCatalogs.reducer>;
  MainPageSettings: MainPageSchema;
  [queryMainPageSettings.reducerPath]: ReturnType<typeof queryMainPageSettings.reducer>;
}
