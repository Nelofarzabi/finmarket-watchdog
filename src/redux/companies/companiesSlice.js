import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
  filteredCompanies: [],
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
});

export default companiesSlice.reducer;
