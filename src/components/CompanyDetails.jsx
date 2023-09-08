import React from 'react';
import { useOutletContext } from 'react-router-dom';

const CompanyDetails = () => {
  const {
    companyName: name,
    industry,
    ceo,
    country,
    website,
    phone,
    address,
    city,
    state,
    price,
    changes,
    symbol,
  } = useOutletContext();
  return (
    <div className="mt-5 w-[90%] mx-auto">
      <table className="w-full">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>industry</th>
            <td>{industry}</td>
          </tr>
          <tr>
            <th>CEO</th>
            <td>{ceo}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{country}</td>
          </tr>
          <tr>
            <th>website</th>
            <td><a href={website} className=" text-blue-400">{symbol}</a></td>
          </tr>
          <tr>
            <th>phone</th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th>address</th>
            <td>{address}</td>
          </tr>
          <tr>
            <th>city</th>
            <td>{city}</td>
          </tr>
          <tr>
            <th>state</th>
            <td>{state}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>
              $
              {price}
            </td>
          </tr>
          <tr>
            <th>Price change</th>
            <td>
              $
              {changes}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyDetails;
