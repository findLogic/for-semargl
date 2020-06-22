import React from 'react';

const NewsListItem = ({ oneNew }) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{oneNew.name}</div>
        <div className="description">{oneNew.body}</div>
      </div>
      <br />
    </div>
  );
};

export default NewsListItem;
