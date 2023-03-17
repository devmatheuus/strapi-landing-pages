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
