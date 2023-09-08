import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OverView from '../components/OverView';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('OverView', () => {
  const mockCompanyDetail = {
    image: 'image-url.jpg',
  };

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      companies: {
        companyDetail: mockCompanyDetail,
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the OverView component with company image', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <OverView />
      </MemoryRouter>,
    );

    // Check if the component renders the "Back Home" link
    expect(getByText('Back Home')).toBeInTheDocument();

    // Check if the component renders the company image
    const companyImage = getByAltText('Company');
    expect(companyImage).toBeInTheDocument();
    expect(companyImage.src).toContain('image-url.jpg');

    // Check if the component renders the navigation links
    expect(getByText('Info')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText('Statement')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <OverView />
      </MemoryRouter>,
    );

    // Check if the rendered component matches the snapshot
    expect(container).toMatchSnapshot();
  });
});
