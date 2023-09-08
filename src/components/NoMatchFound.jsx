import React from 'react';
import PropTypes from 'prop-types';

const NoMatchFound = ({ message }) => (
  <div className="flex justify-center min-h-screen h-full pt-10">
    <h2 className=" text-3xl text-[#96B6C5] text-center">{message}</h2>
  </div>
);

NoMatchFound.propTypes = {
  message: PropTypes.string.isRequired,
};
export default NoMatchFound;
