import React from 'react';
import NewsListItem from './NewsListItem/NewsListItem';

const NewsList = ({ news }) => {
  const renderNewsList = () => {
    return news.map((el) => {
      return <NewsListItem key={el.id} oneNew={el} />;
    });
  };

  return <div className="ui relaxed divided list">{renderNewsList()}</div>;
};

export default NewsList;
