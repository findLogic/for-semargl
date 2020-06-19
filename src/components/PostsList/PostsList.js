import React from 'react';
import PostsListItem from './PostsListItem/PostsListItem';

const PostsList = ({ posts, users }) => {
  const renderPostList = () => {
    return posts.map((el) => {
      return <PostsListItem key={el.id} post={el} />;
    });
  };

  return (
    <>
      <div className="ui comments">
        <h3 className="ui dividing header">Posts</h3>

        {renderPostList()}
      </div>
    </>
  );
};

export default PostsList;
