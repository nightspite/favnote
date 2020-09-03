import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const DetailsPage = ({ match }) => (
  <DetailsTemplate>
    <p>{`is note: ${match.path === routes.note}`}</p>
    <p>{`is twitter: ${match.path === routes.twitter}`}</p>
    <p>{`is article: ${match.path === routes.article}`}</p>
  </DetailsTemplate>
);

DetailsPage.propTypes = {
  match: PropTypes.node.isRequired,
};

export default DetailsPage;
