import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent
import { useDispatch } from 'react-redux';
import { filterCompanies, updateTyping } from '../redux/companies/companiesSlice';
import Header from '../components/Header';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Header', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('dispatches filterCompanies and updateTyping when input value changes', () => {
    const { getByPlaceholderText } = render(<Header />);
    const input = getByPlaceholderText('search company by name...');

    // Use userEvent to change the input value
    userEvent.type(input, 'Company');

    // Ensure the dispatch functions are called with the correct arguments
    expect(mockDispatch).toHaveBeenCalledWith(filterCompanies('Company'));
    expect(mockDispatch).toHaveBeenCalledWith(updateTyping('Company'));
  });

  test('matches snapshot', () => {
    const { container } = render(<Header />);

    // Check if the rendered component matches the snapshot
    expect(container).toMatchSnapshot();
  });
});
