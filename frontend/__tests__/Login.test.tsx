import { render, screen } from '@testing-library/react';

import LoginInfo from '../src/components/molecules/login/InfoLogin/InfoLogin';

it('Login page should have templates', () => {
    const { container } = render(<LoginInfo />);
    expect(container)
})