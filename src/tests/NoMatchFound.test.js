import React from 'react';
import { render } from '@testing-library/react';
import NoMatchFound from '../components/NoMatchFound';

describe('NoMatchFound', () => {
  test('renders with the provided message', () => {
    const { getByText } = render(<NoMatchFound message="Sorry, No Match Was Found" />);

    // Check if the component renders the provided message
    expect(getByText('Sorry, No Match Was Found')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<NoMatchFound message="Sorry, No Match Was Found" />);

    // Check if the rendered component matches the snapshot
    expect(container).toMatchSnapshot();
  });
});
