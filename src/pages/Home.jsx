import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveCompanies } from '../redux/companies/companiesSlice';
import Header from '../components/Header';
import CompaniesList from '../components/CompaniesList';

const Home = () => {
  const { loading } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActiveCompanies());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <main className=" bg-[#2C3333]">
      <Header />
      <CompaniesList />
    </main>
  );
};

export default Home;
