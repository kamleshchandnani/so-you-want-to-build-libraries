/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';
import { theme, injectBaseStyles } from 'ui-kit';

injectBaseStyles(theme);
injectGlobal`
  html {
    min-width: 1024px;
  }

  body {
    overflow: scroll;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default theme;
