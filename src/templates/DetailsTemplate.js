import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import { routes } from '../routes';
// import styled from 'styled-components';

const DetailsTemplate = ({ children }) => (
  <UserPageTemplate>
    {children}
    <Link to={routes.home}>Go back</Link>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DetailsTemplate;
