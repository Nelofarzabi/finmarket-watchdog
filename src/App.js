import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getActiveCompanies } from './redux/companies/companiesSlice';
import Home from './pages/Home';
import Details from './pages/Details';
import PageNotFound from './components/PageNotFound';
import CompanyDetails from './components/CompanyDetails';
import FinancialStatement from './components/FinancialStatement';
import Description from './components/Description';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="details/:symbol" element={<Details />}>
      <Route index element={<CompanyDetails />} />
      <Route path="description" element={<Description />} />
      <Route path="statement" element={<FinancialStatement />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Route>,
));
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActiveCompanies());
  }, [dispatch]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
