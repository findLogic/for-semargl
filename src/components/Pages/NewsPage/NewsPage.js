import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewsList from '../../NewsList/NewsList';
import { fetchNews } from '../../../actions/';

const NewsPage = ({ news, fetchNews }) => {
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <h3 className="ui dividing header">News</h3>
      <NewsList news={news} />
    </>
  );
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, { fetchNews })(NewsPage);
