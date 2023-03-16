import * as Styles from './styles';

export const Heading = ({ children, isLight = false }) => {
  return <Styles.Title isLight={isLight}>{children}</Styles.Title>;
};
