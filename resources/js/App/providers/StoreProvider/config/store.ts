import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { addMainPageSettingsReducer } from '@/Features/Admin/AddMainPageSettings';

//функция создание стора с необязательным параметром, который
// передаем в поле preloadedState (нужно для тестирования)
export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    addMainPageSettings: addMainPageSettingsReducer,
  };
  const store = configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
  return store;
}

// export type RootState = ReturnType<typeof createReduxStore>['getState'];
// экспортируем тип dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
