import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;

  @media (max-width: 640px) {
    padding: 25px 30px 25px 30px;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: [header-start] 100px [header-end] [content-start] auto [content-end];
  grid-gap: 85px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledPageHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledPageParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  z-index: 2;
  bottom: 25px;
  right: 25px;
  border-radius: 50%;
  background-size: 35%;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 640px) {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    bottom: 15px;
    right: 15px;
    background-size: 20%;
    width: 50px;
    height: 50px;
  }

  ${({ close }) =>
    close &&
    css`
      transform: rotate(45deg);
    `}
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  handleNewItemBarToggle = () => {
    this.setState(prevState => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext, numberOfCards } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledPageHeading big as="h1">
              {pageContext}
            </StyledPageHeading>
            <StyledPageParagraph>
              {numberOfCards}{' '}
              {numberOfCards === 1 ? pageContext.slice(0, -1) : pageContext}
            </StyledPageParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            onClick={this.handleNewItemBarToggle}
            icon={plusIcon}
            activecolor={pageContext}
            close={isNewItemBarVisible}
          />
          <NewItemBar isVisible={isNewItemBarVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  numberOfCards: PropTypes.number,
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
  numberOfCards: 0,
};

export default withContext(GridTemplate);
