import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyStatement } from '../redux/companies/companiesSlice';
import FinancialStatement from '../components/FinancialStatement';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/companies/companiesSlice', () => ({
  getCompanyStatement: jest.fn(),
}));

describe('FinancialStatement', () => {
  const mockDispatch = jest.fn();
  const mockStatement = [
    {
      calendarYear: 2021,
      grossProfit: 1000000,
      netIncome: 800000,
      operatingExpenses: 200000,
    },
    {
      calendarYear: 2020,
      grossProfit: 950000,
      netIncome: 750000,
      operatingExpenses: 200000,
    },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selector) => selector({
      companies: {
        statement: mockStatement,
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('dispatches getCompanyStatement action with the symbol parameter', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/statement/XYZ']}>
        <FinancialStatement />
      </MemoryRouter>,
    );

    // Ensure the component dispatches the action with the symbol parameter
    await waitFor(() => expect(mockDispatch).toHaveBeenCalledWith(getCompanyStatement('XYZ')));

    // Check if the component renders the statement data
    expect(getByText('2021')).toBeInTheDocument();
    expect(getByText('$1,000,000')).toBeInTheDocument();
    expect(getByText('$800,000')).toBeInTheDocument();
    expect(getByText('2020')).toBeInTheDocument();
    expect(getByText('$950,000')).toBeInTheDocument();
    expect(getByText('$750,000')).toBeInTheDocument();
  });

  test('matches snapshot', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/statement/XYZ']}>
        <FinancialStatement />
      </MemoryRouter>,
    );

    await waitFor(() => expect(mockDispatch).toHaveBeenCalledWith(getCompanyStatement('XYZ')));

    // Check if the rendered component matches the snapshot
    expect(container).toMatchSnapshot();
  });
});
