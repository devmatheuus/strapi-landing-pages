import { screen } from '@testing-library/react';

import { Text } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Text/>', () => {
  it('should render Text component', () => {
    renderTheme(<Text>Children</Text>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
