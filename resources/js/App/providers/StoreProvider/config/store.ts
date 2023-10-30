import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { postDetailReducer } from '@/entities/Post';

export function createReduxStore(initialState?: StateSchema) {
  const store = configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      postDetail: postDetailReducer,
    },
    preloadedState: initialState,
  });
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
