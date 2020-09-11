import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const detailsElement = {
  id: 1,
  title: 'Hello nightspite',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  created: '1 day',
  twitterName: 'nightspite3',
  articleUrl: 'https://youtube.com/caseyneistat',
};

const DetailsPage = () => (
  <DetailsTemplate
    title={detailsElement.title}
    content={detailsElement.content}
    created={detailsElement.created}
    twitterName={detailsElement.twitterName}
    articleUrl={detailsElement.articleUrl}
  />
);

export default DetailsPage;
