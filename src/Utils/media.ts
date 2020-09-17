import { css, ThemedCssFunction } from 'styled-components';

interface ThemeInterface {
    x: string;
  }

export const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 481,
};


export default (Object.keys(sizes) as Array<keyof typeof sizes>).reduce((acc, label) => {
  acc[label] = (first: any, ...args: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(first, ...args)}
    }
  `;

  return acc;
}, {}as { [key in keyof typeof sizes]: ThemedCssFunction<ThemeInterface> });