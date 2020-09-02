import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
  transition: background-color 0.3s cubic-bezier(0.4, 0.03, 0.36, 1);

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
