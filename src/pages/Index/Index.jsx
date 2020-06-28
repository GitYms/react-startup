import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { getPostByPage } from '../../actions/post';
import { getOneUser } from '../../actions/user';
import styles from './Index.module.less';

const selectUser = createSelector(
  (state) => state,
  (state) => state.user,
);
const selectPost = createSelector(
  (state) => state,
  (state) => state.post,
);

function Index() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const post = useSelector(selectPost);
  const handleGetUser = useCallback(() => {
    dispatch(getOneUser());
  }, [dispatch]);
  return (
    <div className={styles.index}>
      <div className="left">
        <button type="button" onClick={handleGetUser}>
          获取用户
        </button>
        <p>{user.users && JSON.stringify(user.users)}</p>
      </div>
      <div className="right">
        <button
          type="button"
          onClick={() => {
            dispatch(getPostByPage(1));
          }}
        >
          获取一篇文章
        </button>
        <p>{post.content && JSON.stringify(post.content)}</p>
      </div>
    </div>
  );
}

export default memo(Index);