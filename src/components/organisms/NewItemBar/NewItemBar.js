import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
  margin: 25px 0 0;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 25px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin-top: 100px;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.error};
  font-weight: ${({ theme }) => theme.bold};
  padding: 10px 0 0 15px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading>Create new {pageContext}</Heading>
    <Formik
      initialValues={{
        title: '',
        content: '',
        articleUrl: '',
        twitterName: '',
        created: '',
      }}
      validate={values => {
        const errors = {};

        if (!values.title) {
          errors.title = 'Required';
        }

        if (pageContext === 'twitters') {
          if (!values.twitterName) {
            errors.twitterName = 'Required';
          }
        }

        if (pageContext === 'articles') {
          if (!values.articleUrl) {
            errors.articleUrl = 'Required';
          }
        }

        if (!values.content) {
          errors.content = 'Required';
        }
        return errors;
      }}
      onSubmit={values => {
        addItem(pageContext, values);
      }}
    >
      {() => (
        <StyledForm>
          <StyledInput
            as={Field}
            type="text"
            name="title"
            placeholder="title"
          />
          <StyledErrorMessage name="title" component="div" />
          {pageContext === 'articles' && (
            <>
              <StyledInput
                as={Field}
                type="text"
                name="articleUrl"
                placeholder="link"
              />
              <StyledErrorMessage name="articleUrl" component="div" />
            </>
          )}
          {pageContext === 'twitters' && (
            <>
              <StyledInput
                as={Field}
                type="text"
                name="twitterName"
                placeholder="Account name eg. nightspite3"
              />
              <StyledErrorMessage name="twitterName" component="div" />
            </>
          )}
          <StyledTextArea
            as={Field}
            type="textarea"
            name="content"
            placeholder="description"
          />
          <StyledErrorMessage name="content" component="div" />
          <StyledButton type="submit" activecolor={pageContext}>
            Add Note
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
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
