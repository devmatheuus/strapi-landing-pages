<<<<<<< HEAD
import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary};
=======
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ background }) => css`
        background: ${background};
    `}
>>>>>>> b7eb6140905bc72682448e6a8d46f8af5a0a2257
`;
