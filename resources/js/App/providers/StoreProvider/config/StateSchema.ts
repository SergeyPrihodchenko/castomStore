import { MainPageSchema } from '@/Features/Admin/AddMainPageSettings';
import { SchemaCatalogs } from '@/Features/Admin/CatalogsPanel/model/types/types';

export interface StateSchema {
  addMainPageSettings: MainPageSchema;
  CatalogsPanel: SchemaCatalogs
}
