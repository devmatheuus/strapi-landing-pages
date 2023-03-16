import styled, { css } from 'styled-components';

const changeBackground = (theme, bg) => css`
  background: ${bg};
  color: #000;
`;

const Heading = styled.h1`
  color: purple;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};

  ${({ theme, bg }) => css`
    color: ${theme.colors.secondary};
    ${changeBackground(theme, bg)}
  `}
`;

export const Container2 = styled(Container).attrs({ as: 'article' })`
  background: blue;
  /* article > h1 */
  > ${Heading} {
    color: yellow;
  }
  /* article.h1 */
  ${Heading}:hover {
    color: brown;
  }
  /* article:hover */
  &:hover {
    background: pink;
  }
  /* article:hover */
  &::after {
    content: '----';
  }
`;
