import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { postDetailReducer } from '@/entities/Post';
import { addMainPageSettingsReducer } from '@/Features/Admin/AddMainPageSettings';

//функция создание стора с необязательным параметром, который
// передаем в поле preloadedState (нужно для тестирования)
export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    postDetail: postDetailReducer,
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
