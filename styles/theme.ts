// import baseStyled, { ThemedStyledInterface } from "styled-components";

const size = {
  mobile: 767.98,
  tab: 991.98,
  pc: 1299.98,
  largePc: 1400.1,
};

const theme = {
  // color: {
  //   PRIMARY: '#8cd636',
  //   PRIMARYSUB: '#f1f8ea',
  //   SECONDARY: '#57d8b0',
  //   SECONDARYSUB: '#effaf7',
  //   TERTIARY: '#05aabf',
  //   TERTIARYSUB: '#e4f6f8',
  //   POINT: '#b2d677',
  //   BLACK: '#1a1a1a',
  //   GRAY5: '#393939',
  //   GRAY3: '#bebebe',
  //   GRAY2: '#f0f0f0',
  //   GRAY1: '#f8f8f5',
  //   GRAY0: '#fafafa',
  //   WHITE: '#FFFFFF',
  //   WARNING: '#ff3e3e',
  // },
  // radius: 4,
  window: {
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    pc: `@media screen and (max-width: ${size.pc}px)`,
    largePc: `@media screen and (min-width: ${size.largePc}px)`,
  },
};

// export type Theme = typeof theme;
// export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;