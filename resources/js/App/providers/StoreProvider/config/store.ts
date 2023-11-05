import { type ReducersMapObject, configureStore, AnyAction } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { mainPageHeaderReducer } from '@/entities/MainPageHeader/model/slice/mainPageHeaderSlice';
import { createReducerManager } from './reducerManager';
import { addMainPageSettingsReducer } from '@/Features/AddMainPageSettings';

//функция создание стора с необязательным параметром, который
// передаем в поле preloadedState (нужно для тестирования)
export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    mainPage: mainPageHeaderReducer,
    addMainPageSettings: addMainPageSettingsReducer,
  };
  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    // @ts-ignore
    reducer: reducerManager.reduce,
    preloadedState: initialState,
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}

// export type RootState = ReturnType<typeof createReduxStore>['getState'];
// экспортируем тип dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
