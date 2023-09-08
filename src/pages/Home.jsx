import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CompaniesList from '../components/CompaniesList';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Home = () => {
  const { loading, error } = useSelector((state) => state.companies);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <main className=" bg-[#2C3333] min-h-screen">
      <Header />
      <CompaniesList />
    </main>
  );
};

export default Home;
