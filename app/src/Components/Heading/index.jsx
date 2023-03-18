import P from 'prop-types';

import * as Styles from './styles';

export const Heading = ({
  children,
  isThemeDark = false,
  as = 'h1',
  size = 'small',
  isUppercase = false,
}) => {
  return (
    <Styles.Title
      isThemeDark={isThemeDark}
      as={as}
      size={size}
      isUppercase={isUppercase}
    >
      {children}
    </Styles.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  isThemeDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  isUppercase: P.bool,
};
