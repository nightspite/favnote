import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  max-width: 60vw;
  position: relative;
  padding: 25px 150px 25px 50px;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledParagraphRemove = styled(Paragraph)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 10px 0 50px;
  text-decoration: underline;
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const DetailsTemplate = ({
  pageType,
  title,
  content,
  created,
  twitterName,
  articleUrl,
}) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
        <StyledParagraph>created - {created} ago</StyledParagraph>
      </StyledHeader>
      <Paragraph>{content}</Paragraph>
      {pageType === 'articles' && (
        <StyledLink href={articleUrl}>Open article</StyledLink>
      )}
      {pageType === 'twitters' && (
        <>
          <StyledImage
            alt={title}
            src={`http://twivatar.glitch.me/${twitterName}`}
          />
          <StyledLink href={`https://twitter.com/${twitterName}`}>
            Open this twitter
          </StyledLink>
        </>
      )}
      <Button as={Link} to={`/${pageType}`} activeColor={pageType}>
        save / close
      </Button>
      <StyledParagraphRemove>Remove</StyledParagraphRemove>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  created: PropTypes.string,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  content: '',
  created: '',
  twitterName: '',
  articleUrl: '',
};

export default DetailsTemplate;
