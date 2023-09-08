import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Description = () => {
  const details = useOutletContext();
  const { description } = details;
  return (
    <div className="mt-2">
      <h2 className="text-center text-gray-600 md:w-[50%] mx-auto bg-orange-50 text-2xl rounded-md py-1 my-3">Description</h2>
      <p className=" text-base text-justify mt-2 text-gray-200">
        {description}
      </p>
    </div>
  );
};

export default Description;
