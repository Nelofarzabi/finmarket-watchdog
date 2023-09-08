import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyStatement } from '../redux/companies/companiesSlice';

const FinancialStatement = () => {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const { statement } = useSelector((state) => state.companies);
  useEffect(() => {
    dispatch(getCompanyStatement(symbol));
  }, [dispatch, symbol]);

  return (
    <div>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="w-[10%]">Year</th>
            <th>Income(net)</th>
            <th>Expenses(operating)</th>
            <th>Gross Profit</th>
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
