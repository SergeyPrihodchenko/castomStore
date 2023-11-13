import { type ReducersMapObject, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { addMainPageSettingsReducer } from '@/Features/Admin/AddMainPageSettings';
import CatalogsSlice from '@/Features/Admin/CatalogsPanel/model/reducers/slices/CatalogsSlice';
import { queryCatalogs } from '@/Features/Admin/CatalogsPanel/model/reducers/query/rtkCatalogs';

//функция создание стора с необязательным параметром, который
// передаем в поле preloadedState (нужно для тестирования)
export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    addMainPageSettings: addMainPageSettingsReducer,
    CatalogsPanel: CatalogsSlice,
    [queryCatalogs.reducerPath]: queryCatalogs.reducer
  };
  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
      queryCatalogs.middleware,
    ])
  });
  return store;
}

// export type RootState = ReturnType<typeof createReduxStore>['getState'];
// экспортируем тип dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
