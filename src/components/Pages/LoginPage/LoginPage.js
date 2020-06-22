import React, { useState } from 'react';
import ErrorInLogin from './ErrorInLogin/ErrorInLogin';
import users from '../../../users/users.json';
import history from '../../../history';
import { signIn } from '../../../actions/';
import { connect } from 'react-redux';

const LoginPage = ({ signIn }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const findUser = users.find((user) => user.login === login);

    if (findUser) {
      if (findUser.password === password) {
        setError(false);
        signIn({ login, password });
        history.push('/');
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  const renderError = () => {
    return (
      error && (
        <ErrorInLogin message="Please enter correct password and login." />
      )
    );
  };

  return (
    <div>
      <h3 className="ui dividing header">Login Page</h3>
      <form className="ui form error" onSubmit={(e) => handleSubmit(e)}>
        <div className="field">
          <label>Login</label>
          <input
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            name="login"
            placeholder="Please enter your login..."
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="last-name"
            placeholder="Please enter your password..."
          />
        </div>

        {renderError()}

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { signIn })(LoginPage);
