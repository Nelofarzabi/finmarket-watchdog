import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OverView from '../components/OverView';
import { getCompanyDetail } from '../redux/companies/companiesSlice';
import Loading from '../components/Loading';

const Details = () => {
  const { symbol } = useParams();
  const { companyDetail, loading } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyDetail(symbol));
  }, [dispatch, symbol]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-[#2C3333] p-4 min-h-screen">
      <OverView />
      <Outlet context={companyDetail} />
    </div>
  );
};

export default Details;
