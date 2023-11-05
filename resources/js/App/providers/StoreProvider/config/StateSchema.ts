import { MainPageSettingsFields } from '@/Features/AddMainPageSettings/model/types/addMainPageSettings';
import { LoginSchema } from '@/Features/AuthByUserEmail';
import { CounterSchema } from '@/entities/Counter';
import { MainPageHeaderSchema } from '@/entities/MainPageHeader';
import { PostDetailSchema } from '@/entities/Post';
import { UserSchema } from '@/entities/User';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateSchema {
  counter: CounterSchema;
  mainPage: MainPageHeaderSchema;
  user: UserSchema;
  addMainPageSettings: MainPageSettingsFields;

  // асинхронные редьюсеры
  postDetail?: PostDetailSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
