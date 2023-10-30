import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';
interface StoreProvider {
  children?: ReactNode;
  initialState?: StateSchema;
}
export const StoreProvider = (props: StoreProvider) => {
  const { children, initialState } = props;
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
