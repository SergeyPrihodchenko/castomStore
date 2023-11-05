import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { postDetailReducer } from '@/entities/Post';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/Features/AuthByUserEmail';
import { mainPageHeaderReducer } from '@/entities/MainPageHeader/model/slice/mainPageHeaderSlice';

//функция создание стора с необязательным параметром, который
// передаем в поле preloadedState (нужно для тестирования)
export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    postDetail: postDetailReducer,
    user: userReducer,
    login: loginReducer,
    mainPage: mainPageHeaderReducer,
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
