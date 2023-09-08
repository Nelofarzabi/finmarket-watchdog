import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';

const CompanyCard = ({ name, price, symbol }) => (
  <li className="card text-white flex flex-col items-end justify-between h-[220px] md:h-[300px] bg-center bg-no-repeat bg-cover p-3 ">
    <div>
      <HiOutlineArrowRightCircle style={{ fontSize: '1.6rem' }} />
    </div>
    <h2 className=" flex flex-col gap-2">
      <p className="text-base md:text-2xl">
        {name.length > 14 ? `${name.slice(0, 10)}...` : name}
      </p>

      <span className="bg-slate-600 text-sm self-end rounded-md py-1 px-3 tracking-widest">{symbol}</span>
      <span className="self-end text-base md:text-2xl">
        $
        {price}
      </span>
    </h2>
  </li>
);

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default CompanyCard;
