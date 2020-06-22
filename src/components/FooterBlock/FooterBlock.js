import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterBlock = () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui stackable inverted divided equal height stackable grid">
          <div className="three wide column">
            <h4 className="ui inverted header">Footer navigation </h4>
            <div className="ui inverted link list">
              <NavLink to="/" exact className="item">
                Home
              </NavLink>
              <NavLink to="/profile" exact className="item">
                Profile
              </NavLink>
              <NavLink to="/news" exact className="item">
                News
              </NavLink>
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
