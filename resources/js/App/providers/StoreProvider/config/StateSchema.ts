import { MainPageSchema } from '@/Features/Admin/AddMainPageSettings';
import { queryMainPageSettings } from '@/Features/Admin/AddMainPageSettings/model/services/query/rtkMainPageSettings';
import { queryCatalogs } from '@/entities/Catalog/model/query/rtkCatalog';
import { SchemaCatalogs } from '@/Features/Admin/CatalogsAccordion/model/types/types';
import { productApi } from '@/entities/Product/model/slice/productApi';
import { queryCategory } from '@/entities/Category/model/query/rtkCategory';

export interface StateSchema {
  [queryCatalogs.reducerPath]: ReturnType<typeof queryCatalogs.reducer>;
  [queryCategory.reducerPath]: ReturnType<typeof queryCategory.reducer>;
  [queryMainPageSettings.reducerPath]: ReturnType<typeof queryMainPageSettings.reducer>;
  [productApi.reducerPath]: ReturnType<typeof productApi.reducer>;
}
