import { ReactNode, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from '@/App/providers/StoreProvider';
import { StateSchemaKey } from '@/App/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}
export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount } = props;
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;
  useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]: ReducerListEntry) => {
      store.reducerManager.add(keyName, reducer);
      dispatch({ type: `@INIT ${keyName} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyName, reducer]: ReducerListEntry) => {
          store.reducerManager.remove(keyName);
          dispatch({ type: `@DESTROY ${keyName} reducer` });
        });
      }
    };
  }, []);
  return <>{children}</>;
};
