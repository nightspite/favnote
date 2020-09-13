/* eslint-disable no-console */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions';
import PropTypes from 'prop-types';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({ authenticate }) => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        authenticate(username, password);
      }}
    >
      {() => (
        <>
          <Heading>Sign in</Heading>
          <StyledForm>
            <StyledInput
              as={Field}
              name="username"
              type="text"
              placeholder="Username"
            />
            <StyledInput
              as={Field}
              name="password"
              type="password"
              placeholder="Password"
            />
            <Button type="submit" activecolor="notes">
              sign in
            </Button>
          </StyledForm>
          <StyledLink to={routes.register}>Create account</StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

LoginPage.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) =>
    dispatch(authenticateAction(username, password)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
