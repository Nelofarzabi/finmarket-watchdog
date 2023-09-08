import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CompanyCard from '../components/CompanyCard';
import { getActiveCompanies } from '../redux/companies/companiesSlice';

const Home = () => {
  const { companies } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActiveCompanies());
  }, []);
  return (
    <main>
      <ul className=" grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {
          companies.map((company) => {
            const { name, price, symbol } = company;
            return (
              <Link to={`details/${symbol}`} key={symbol}>
                <CompanyCard name={name} price={price} symbol={symbol} />
              </Link>
            );
          })
        }
      </ul>
    </main>
  );
};

export default Home;
