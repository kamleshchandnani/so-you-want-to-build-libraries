import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import HotelList from './hotels/HotelList';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HotelList />
  </ThemeProvider>,
  document.getElementById('app'),
);
