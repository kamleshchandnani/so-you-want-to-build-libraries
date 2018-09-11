/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';

const injectBaseStyles = (
  theme,
) => {
  injectGlobal`
    html {
      box-sizing: border-box;
    }

    body {
      background: ${theme.color.greyLighter};
      color: ${theme.color.greyDarker};
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.normal};
      font-family: ${theme.fontFamily.roboto}, system-ui, sans-serif;
      margin: 0;
    }

    *,
    *::after,
    *::before {
      line-height: 1.2;
      box-sizing: inherit;
    }
  `;
};

export default injectBaseStyles;
