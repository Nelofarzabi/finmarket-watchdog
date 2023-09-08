import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
  filteredCompanies: [],
  companyDetail: {},
  statement: [],
  loading: false,
  error: '',
  typing: false,
};
// const API_KEY = 'c0405893fd96337e82d58e3ee28f1c63';
const API_KEY = 'e0d5c8b7ecae7653aafd24f369a50e0a';

export const getActiveCompanies = createAsyncThunk('companies/getCompanies', async () => {
  try {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});
export const getCompanyDetail = createAsyncThunk('companies/getCompanyDetail', async (symbol) => {
  try {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});
export const getCompanyStatement = createAsyncThunk('companies/getCompanyStatement', async (symbol) => {
  try {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${symbol}?limit=120&apikey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    filterCompanies: (state, action) => {
      state.filteredCompanies = state.companies
        .filter((company) => company.name.toLowerCase()
          .startsWith(action.payload.toLowerCase()));
    },
    updateTyping: (state, action) => {
      state.typing = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getActiveCompanies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActiveCompanies.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload['Error Message']) {
          state.companies = [];
        }
        state.companies = action.payload;
      })
      .addCase(getActiveCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCompanyDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCompanyDetail.fulfilled, (state, action) => {
        state.loading = false;
        [state.companyDetail] = action.payload;
      })
      .addCase(getCompanyDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCompanyStatement.pending, (state) => {
        state.loading = false;
      })
      .addCase(getCompanyStatement.fulfilled, (state, action) => {
        state.loading = false;
        state.statement = action.payload;
      })
      .addCase(getCompanyStatement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { filterCompanies, updateTyping } = companiesSlice.actions;
export default companiesSlice.reducer;
