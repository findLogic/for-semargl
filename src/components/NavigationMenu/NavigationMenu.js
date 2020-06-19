import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <>
      <div className="ui secondary pointing menu">
        <NavLink to="/" exact activeClassName="active" className="item">
          Home
        </NavLink>
        <NavLink to="/profile" exact className="item">
          Profile
        </NavLink>
        <NavLink to="/news" exact className="item">
          News
        </NavLink>
        <div className="right menu">
          <NavLink to="/" className="ui item">
            Logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;
