import { type ReducersMapObject, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { addMainPageSettingsReducer } from '@/Features/Admin/AddMainPageSettings';
import { queryCatalogs } from '@/entities/Catalog/model/query/rtkCatalog';
import { queryMainPageSettings } from '@/Features/Admin/AddMainPageSettings/model/services/query/rtkMainPageSettings';
import { productApi } from '@/entities/Product/model/slice/productApi';
import { queryCategory } from '@/entities/Category/model/query/rtkCategory';
import { queryUsers } from '@/Pages/AdminPage/UsersPage/model/redux/RTKQuery';

//функция создание стора с необязательным параметром, который
// передаем в поле preloadedState (нужно для тестирования)
export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    // addMainPageSettings: addMainPageSettingsReducer,
    // MainPageSettings: addMainPageSettingsReducer,
    [queryCategory.reducerPath]: queryCategory.reducer,
    [queryCatalogs.reducerPath]: queryCatalogs.reducer,
    [queryMainPageSettings.reducerPath]: queryMainPageSettings.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [queryUsers.reducerPath]: queryUsers.reducer
  };
  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        queryCatalogs.middleware,
        queryCategory.middleware,
        productApi.middleware,
        queryMainPageSettings.middleware,
        queryUsers.middleware
      ]),
  });
  return store;
}

export type RootState = ReturnType<typeof createReduxStore>['getState'];
// экспортируем тип dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
