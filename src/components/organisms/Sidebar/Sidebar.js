import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import penIcon from 'assets/icons/pen.svg';
import logoutIcon from 'assets/icons/logout.svg';
import logoIcon from 'assets/icons/logo.svg';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import withContext from 'hoc/withContext';

const SidebarWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  height: 100vh;
  width: 153px;
  /* background-color: ${({ theme }) => theme.note}; */
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.notes};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    /* display: none; */
    padding: 0;
    width: 80px;
  }
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Sidebar = ({ pageContext }) => (
  <SidebarWrapper activeColor={pageContext}>
    <StyledLogoLink to="/" />

    <StyledLinksList>
      <li>
        <ButtonIcon as={NavLink} to={routes.notes} icon={penIcon} />
      </li>
      <li>
        <ButtonIcon as={NavLink} to={routes.twitters} icon={twitterIcon} />
      </li>
      <li>
        <ButtonIcon as={NavLink} to={routes.articles} icon={bulbIcon} />
      </li>
    </StyledLinksList>

    <StyledLogoutButton as={NavLink} to={routes.login} icon={logoutIcon} />
  </SidebarWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
