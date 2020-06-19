import React from 'react';

const FooterBlock = () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui stackable inverted divided equal height stackable grid">
          <div className="three wide column">
            <h4 className="ui inverted header">About</h4>
            <div className="ui inverted link list">
              <a href="/" className="item">
                Contact Us
              </a>
            </div>
          </div>

          <div className="seven wide column">
            <h4 className="ui inverted header">Extra Inforamtion:</h4>
            <p>Here is some extra information about project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBlock;
