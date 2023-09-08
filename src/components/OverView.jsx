import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const OverView = () => {
  const { companyDetail: { image } } = useSelector((state) => state.companies);
  const style = {
    borderBottom: '1px solid #fff',
    color: '#F4EEE0',
    padding: '2px',
  };
  return (
    <div className="mb-3 px-4">
      <Link to="/" className="flex gap-4 items-center mb-4">
        <HiArrowNarrowLeft className="text-white text-2xl" />
        <p className="text-white text-xl">Back Home</p>
      </Link>
      <div className="flex justify-center items-start gap-6">
        <div className="">
          <img src={image} alt="" className=" object-cover" />
        </div>
      </div>
      <nav className="py-2 w-full ">
        <ul className="flex md:w-[55%] mx-auto justify-between gap-4">
          <li>
            <NavLink
              to="."
              end
              className="text-white text-xl"
              style={({ isActive }) => (isActive ? style : {})}
            >
              Info
            </NavLink>
          </li>
          <li>
            <NavLink
              to="description"
              className="text-white text-xl"
              style={({ isActive }) => (isActive ? style : {})}
            >
              Description
            </NavLink>
          </li>
          <li>
            <NavLink
              to="statement"
              className="text-white text-xl"
              style={({ isActive }) => (isActive ? style : {})}
            >
              Statement
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OverView;
