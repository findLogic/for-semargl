import React from 'react';

const PostListItem = ({ post }) => {
  return (
    <div className="comment">
      <div className="content">
        <div className="author">{post.title}</div>
        <div className="text">{post.body}</div>
      </div>
      <br />
    </div>
  );
};

export default PostListItem;
