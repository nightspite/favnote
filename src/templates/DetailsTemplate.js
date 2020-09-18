import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  max-width: 60vw;
  position: relative;
  padding: 25px 150px 25px 50px;

  @media (max-width: 1200px) {
    max-width: 40vw;
  }

  @media (max-width: 640px) {
    max-width: calc(100vw - 80px);
    overflow: hidden;
    padding: 25px 0px 25px 30px;
  }
`;

const StyledHeader = styled.div`
  margin: 25px 0 50px 0;

  @media (max-width: 640px) {
    margin-bottom: 25px;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

// const StyledParagraph = styled(Paragraph)`
//   margin: 0;
//   text-transform: uppercase;
//   font-weight: ${({ theme }) => theme.bold};
// `;

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

  @media (max-width: 640px) {
    right: 5px;
    top: 45px;
    width: 70px;
    height: 70px;
  }
`;

const DetailsTemplate = ({
  pageContext,
  title,
  content,
  // created,
  twitterName,
  articleUrl,
}) => (
  <UserPageTemplate pageType={pageContext}>
    <StyledWrapper>
      <StyledHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
        {/* <StyledParagraph>created - {created} ago</StyledParagraph> */}
      </StyledHeader>
      <Paragraph>{content}</Paragraph>
      {pageContext === 'articles' && (
        <StyledLink href={articleUrl}>Open article</StyledLink>
      )}
      {pageContext === 'twitters' && (
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
      <Button as={Link} to={`/${pageContext}`} activecolor={pageContext}>
        save and close
      </Button>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']).isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  // created: PropTypes.string,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  content: '',
  // created: '',
  twitterName: '',
  articleUrl: '',
};

export default withContext(DetailsTemplate);
