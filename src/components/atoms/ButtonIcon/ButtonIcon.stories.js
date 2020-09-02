import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import penIcon from 'assets/icons/pen.svg';
import logoutIcon from 'assets/icons/logout.svg';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.note};
`;

export default {
  title: 'Components/Atoms/ButtonIcon',
  component: ButtonIcon,
  decorators: [story => <YellowBackground>{story()}</YellowBackground>],
};

export const Bulb = () => <ButtonIcon icon={bulbIcon}></ButtonIcon>;
export const Twitter = () => <ButtonIcon icon={twitterIcon}></ButtonIcon>;
export const Pen = () => <ButtonIcon icon={penIcon}></ButtonIcon>;
export const Logout = () => <ButtonIcon icon={logoutIcon}></ButtonIcon>;
export const Plus = () => <ButtonIcon icon={plusIcon}></ButtonIcon>;
