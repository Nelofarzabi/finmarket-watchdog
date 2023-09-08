import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyDetail } from '../redux/companies/companiesSlice';
import Details from '../pages/Details';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/companies/companiesSlice', () => ({
  getCompanyDetail: jest.fn(),
}));

describe('Details', () => {
  const mockDispatch = jest.fn();
  const mockCompanyDetail = {
    image: 'image-url.jpg',
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selector) => selector({
      companies: {
        companyDetail: mockCompanyDetail,
        loading: false,
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('dispatches getCompanyDetail action with the symbol parameter', async () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter initialEntries={['/details/XYZ']}>
        <Routes>
          <Route path="/details/:symbol" element={<Details />} />
        </Routes>
      </MemoryRouter>,
    );

    // Ensure the component dispatches the action with the symbol parameter
    await waitFor(() => expect(mockDispatch).toHaveBeenCalledWith(getCompanyDetail('XYZ')));

    // Check if the component renders the loading text while data is fetched

    // Check if the component renders the "Back Home" link
    expect(getByText('Back Home')).toBeInTheDocument();

    // Check if the component renders the company image
    const companyImage = getByAltText('Company');
    expect(companyImage).toBeInTheDocument();
    expect(companyImage.src).toContain('image-url.jpg');

    // You can add more assertions for other elements if needed
  });

  test('matches snapshot', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/details/XYZ']}>
        <Routes>
          <Route path="/details/:symbol" element={<Details />} />
        </Routes>
      </MemoryRouter>,
    );

    // Ensure the component dispatches the action with the symbol parameter
    await waitFor(() => expect(mockDispatch).toHaveBeenCalledWith(getCompanyDetail('XYZ')));

    // Check if the rendered component matches the snapshot
    expect(container).toMatchSnapshot();
  });
});
