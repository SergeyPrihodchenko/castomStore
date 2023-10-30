import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../model/services/fetchPost/fetchPost';
import { getPost } from '../../model/selectors/getPost/getPost';
import { useAppDispatch } from '@/Shared/lib/hooks/useAppDispatch/useAppDispatch';

export const PostDetail = () => {
  const dispatch = useAppDispatch();
  const post = useSelector(getPost);
  console.log(post);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return <div>{post?.data?.body}</div>;
};
