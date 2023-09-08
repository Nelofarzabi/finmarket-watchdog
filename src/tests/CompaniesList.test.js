import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CompaniesList from '../components/CompaniesList';

const mockStore = configureMockStore();

describe('CompaniesList', () => {
  test('renders with filtered companies', () => {
    const initialState = {
      companies: {
        filteredCompanies: [
          { name: 'Company 1', price: 100, symbol: 'C1' },
          { name: 'Company 2', price: 200, symbol: 'C2' },
        ],
        typing: true,
        companies: [],
      },
    };

    const store = mockStore(initialState);

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CompaniesList />
        </MemoryRouter>
      </Provider>,
    );

    // Check that the component renders the filtered companies
    expect(getByText('Company 1')).toBeInTheDocument();
    expect(getByText('Company 2')).toBeInTheDocument();
    expect(queryByText('Sorry, Cannot fetch data at the moment, check back tomorrow')).toBeNull();
  });

  test('renders with no matching companies when typing', () => {
    const initialState = {
      companies: {
        filteredCompanies: [],
        typing: true,
        companies: [],
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CompaniesList />
        </MemoryRouter>
      </Provider>,
    );

    // Check that the component displays the "NoMatchFound" message
    expect(getByText('Sorry, No Match Was Found')).toBeInTheDocument();
  });
  test('renders with companies in the list', () => {
    const initialState = {
      companies: {
        filteredCompanies: [],
        typing: false,
        companies: [
          { name: 'Company A', price: 150, symbol: 'CA' },
          { name: 'Company B', price: 250, symbol: 'CB' },
        ],
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CompaniesList />
        </MemoryRouter>
      </Provider>,
    );

    // Check that the component renders the companies from the companies array
    expect(getByText('Company A')).toBeInTheDocument();
    expect(getByText('Company B')).toBeInTheDocument();
  });

  test('renders with no matching companies when not typing', () => {
    const initialState = {
      companies: {
        filteredCompanies: [],
        typing: false,
        companies: [],
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CompaniesList />
        </MemoryRouter>
      </Provider>,
    );

    // Check that the component displays the "NoMatchFound" message
    expect(getByText('Sorry, Cannot fetch data at the moment, check back tomorrow')).toBeInTheDocument();
  });
});
