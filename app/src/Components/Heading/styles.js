import styled, { css } from 'styled-components';

export const Title = styled.h1`
${({ theme, isLight }) => css`
    color: ${isLight ? theme.colors.primary : theme.colors.white}
`}
`;
