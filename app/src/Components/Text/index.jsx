import P from 'prop-types';

import { theme } from '../../styles/theme';
import * as Styled from './styles';

export const Text = ({ children, color }) => {
  return <Styled.Paragraph color={color}>{children}</Styled.Paragraph>;
};

Text.propTypes = {
  children: P.node.isRequired,
  color: P.oneOf([theme.colors.white, theme.colors.primary]).isRequired,
};
