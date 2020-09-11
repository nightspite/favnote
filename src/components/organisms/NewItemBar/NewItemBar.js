import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  border-left: 5px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 100px 90px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  border-radius: 20px;
  margin: 25px 0 100px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 25px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading>Create new {pageContext}</Heading>
    <StyledInput placeholder="title" />
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    {pageContext === 'twitters' && (
      <StyledInput placeholder="Account name eg. nightspite3" />
    )}
    <StyledTextArea as="textarea" placeholder="description" />
    <Button
      onClick={() =>
        addItem(pageContext, {
          title: 'Hello',
          content: 'lorem ipsum',
        })
      }
      activecolor={pageContext}
    >
      Add Note
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) =>
    dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
