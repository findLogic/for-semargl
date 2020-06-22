import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/';

const NavigationMenu = ({ user, signOut }) => {
  const renderLoginLogout = () => {
    if (user.user) {
      return (
        <Link onClick={signOut} to="/" className="ui item">
          Logout
        </Link>
      );
    } else {
      return (
        <NavLink to="/login" className="ui item">
          Login
        </NavLink>
      );
    }
  };

  return (
    <>
      <div className="ui secondary pointing menu">
        <NavLink to="/" exact className="item">
          Home
        </NavLink>
        <NavLink to="/profile" exact className="item">
          Profile
        </NavLink>
        <NavLink to="/news" exact className="item">
          News
        </NavLink>
        <div className="right menu">{renderLoginLogout()}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { signOut })(NavigationMenu);
