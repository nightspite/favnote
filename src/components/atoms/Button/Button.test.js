import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Button from 'components/atoms/Button/Button';

describe('Button Component', () => {
  it('Renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Hello</Button>
      </ThemeProvider>,
    );

    getByText('Hello');
    getByText('Hello nightspite');
  });
});
