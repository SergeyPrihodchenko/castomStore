import { useEffect } from 'react';
import { useSelector, useStore } from 'react-redux';
import { fetchPost } from '../../model/services/fetchPost/fetchPost';
import { useAppDispatch } from '@/Shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReduxStoreWithManager } from '@/App/providers/StoreProvider';
import { getPostTitle } from '../../model/selectors/getPostTitle/getPostTitle';
import { getPostBody } from '../../model/selectors/getPostBody/getPostBody';
import { getPostIsLoading } from '../../model/selectors/getPostIsLoading/getPostIsLoading';
import { getPostError } from '../../model/selectors/getPostError/getPostError';
import { getPost } from '../../model/selectors/getPost/getPost';
import { postDetailReducer } from '../../model/slice/postDetailSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/Shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = {
  postDetail: postDetailReducer,
};

export const PostDetail = () => {
  const dispatch = useAppDispatch();
  // const store = useStore() as ReduxStoreWithManager;
  const postTitle = useSelector(getPostTitle);
  const postBody = useSelector(getPostBody);
  const postIsLoading = useSelector(getPostIsLoading);
  const postError = useSelector(getPostError);

  // useEffect(() => {
  //   store.reducerManager.add('postDetail', postDetailReducer);
  //   dispatch({ type: '@INIT postDetail reducer' });

  //   return () => {
  //     store.reducerManager.remove('postDetail');
  //     dispatch({ type: '@DESTROY postDetail reducer' });
  //   };
  // }, []);

  const loadPost = () => {
    dispatch(fetchPost());
  };
  const post = useSelector(getPost);
  console.log(post);
  return (
    <DynamicModuleLoader
      reducers={initialReducers}
      removeAfterUnmount
    >
      <button onClick={loadPost}>load post</button>
      {postIsLoading && <span>loading ...</span>}
      <h1>Title: {postTitle}</h1>
      <div>Body: {postBody}</div>
    </DynamicModuleLoader>
  );
};
