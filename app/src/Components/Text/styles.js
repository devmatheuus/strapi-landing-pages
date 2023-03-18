import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  ${({ theme, color }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${color};
  `}
`;
