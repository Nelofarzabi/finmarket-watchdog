import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyStatement } from '../redux/companies/companiesSlice';
import Error from './Error';

const FinancialStatement = () => {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const { statement, error } = useSelector((state) => state.companies);
  useEffect(() => {
    dispatch(getCompanyStatement(symbol));
  }, [dispatch, symbol]);
  if (error) {
    return <Error />;
  }
  return (
    <div>
      <table className="w-full md:w-[60%] mx-auto">
        <tbody>
          <tr>
            <th className="text-center">Year</th>
            <th className="text-center">Income(net)</th>
            <th className="text-center">Expenses(operating)</th>
            <th className="text-center">Gross Profit</th>
          </tr>
          {
            statement.map((state) => {
              const {
                calendarYear: year,
                grossProfit: profit,
                netIncome: income,
                operatingExpenses: expenses,
              } = state;
              return (
                <tr key={symbol}>
                  <td className="w-[10%]">{year}</td>
                  <td className="w-[10%]">
                    $
                    {income.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap w-[10%]">
                    $
                    {expenses.toLocaleString()}
                  </td>
                  <td className="w-[10%]">
                    $
                    {profit.toLocaleString()}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default FinancialStatement;
