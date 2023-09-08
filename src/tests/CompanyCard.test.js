import React from 'react';
import { render } from '@testing-library/react';
import CompanyCard from '../components/CompanyCard';

describe('CompanyCard', () => {
  test('renders the CompanyCard component with provided props', () => {
    const props = {
      name: 'Apple',
      price: 100.5,
      symbol: 'APPL',
    };

    const { getByText } = render(
      <CompanyCard
        name={props.name}
        price={props.price}
        symbol={props.symbol}
      />,
    );

    // Check if the component renders the name, price, and symbol
    expect(getByText('Apple')).toBeInTheDocument();
    expect(getByText('APPL')).toBeInTheDocument();
    expect(getByText('$100.5')).toBeInTheDocument();
  });

  test('truncates long names with ellipsis', () => {
    const props = {
      name: 'Palisade Bio, Inc.',
      price: 200.75,
      symbol: 'PALI',
    };

    const { getByText } = render(
      <CompanyCard
        name={props.name}
        price={props.price}
        symbol={props.symbol}
      />,
    );

    // Check if the component truncates the long name with ellipsis
    expect(getByText('Palisade B...')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const props = {
      name: 'Tesla, Inc',
      price: 150.25,
      symbol: 'TSLA',
    };

    const { container } = render(
      <CompanyCard
        name={props.name}
        price={props.price}
        symbol={props.symbol}
      />,
    );

    // Check if the rendered component matches the snapshot
    expect(container).toMatchSnapshot();
  });
});
