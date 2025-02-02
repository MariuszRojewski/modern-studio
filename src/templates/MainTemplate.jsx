import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

export function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
