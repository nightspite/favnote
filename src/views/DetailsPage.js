import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';
import PropTypes from 'prop-types';

const detailsElement = {
  id: 1,
  title: 'Hello nightspite',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  created: '1 day',
  twitterName: 'nightspite3',
  articleUrl: 'https://youtube.com/caseyneistat',
};

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.notes:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        this.setState({ pageType: 'notes' });
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      // eslint-disable-next-line react/destructuring-assignment
      <DetailsTemplate
        pageType={pageType}
        title={detailsElement.title}
        content={detailsElement.content}
        created={detailsElement.created}
        twitterName={detailsElement.twitterName}
        articleUrl={detailsElement.articleUrl}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
};

export default DetailsPage;
