import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/';
import PostsList from '../../PostsList/PostsList';

const MainPage = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(MainPage);
