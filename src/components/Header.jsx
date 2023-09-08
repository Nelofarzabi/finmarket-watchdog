import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCompanies, updateTyping } from '../redux/companies/companiesSlice';

const Header = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterCompanies(e.target.value));
    dispatch(updateTyping(e.target.value));
  };
  return (
    <header className="flex justify-between items-center p-4 bg-[#2C3333] shadow-lg">
      <h2 className=" text-2xl text-[#F8F0E5]">Active Companies</h2>
      <form action="" className="w-[50%]">
        <input
          type="text"
          name=""
          id=""
          placeholder="search company by name..."
          className="border w-full px-2 py-1 rounded-md outline-none"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
