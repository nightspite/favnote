/* eslint-disable no-console */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import styled from 'styled-components';

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

const RegisterPage = () => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        axios
          .post('http://localhost:9000/api/user/login', {
            username,
            password,
          })
          .then(() => console.log('Login successful'))
          .catch(err => console.log(err));
      }}
    >
      {() => (
        <>
          <Heading>Register</Heading>
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
            <Button type="submit">Register</Button>
          </StyledForm>
          <StyledLink to={routes.login}>
            Already have an account? Log in!
          </StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

export default RegisterPage;
