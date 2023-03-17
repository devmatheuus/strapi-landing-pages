import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
  font-size: ${theme.fonts.sizes.xLarge};
`,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xHuge};
  `,
};
const titleAppearance = (isUppercase) => css`
    text-transform: ${isUppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
${({ theme, isThemeDark, size, isUppercase }) => css`
    color: ${isThemeDark ? theme.colors.white : theme.colors.primary};
    ${titleSize[size](theme)};
    ${titleAppearance(isUppercase)};
`}
`;
