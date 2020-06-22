import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProfilePage = ({ user }) => {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h3>Profile Page</h3>
      <p>Here must be some info about you.</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(ProfilePage);
