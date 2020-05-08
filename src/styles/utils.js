import { css } from "styled-components"
const device = {
  mobile: 480,
  portraitTablet: 768,
  landscapeTablet: 1024,
  desktop: 1200,
};

export const responsiveHelpers = {
  ...Object.entries(device).reduce((generatedHelpers, [label, size]) => {
    const labelReworked = label.charAt(0).toUpperCase() + label.slice(1);

    return {
      ...generatedHelpers,
      [`for${labelReworked}Up`]: (...args) => css`
        @media (min-width: ${size / 16}em) {
          ${css(...args)};
        }
      `,
      [`below${labelReworked}`]: (...args) => css`
        @media (max-width: ${(size - 1) / 16}em) {
          ${css(...args)};
        }
      `,
    };
  }, {}),
};
