import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchPost } from '../../model/services/fetchPost/fetchPost';
import { getPost } from '../../model/selectors/getPost/getPost';
import { useAppDispatch } from '@/Shared/lib/hooks/useAppDispatch/useAppDispatch';

export const PostDetail = () => {
  const dispatch = useAppDispatch();
  const post = useSelector(getPost);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return (
    <div>
      {post.isLoading && <p>loading...</p>}
      <h1>{post.data?.title}</h1>
      {post?.data?.body}
    </div>
  );
};

// export default PostDetail;
