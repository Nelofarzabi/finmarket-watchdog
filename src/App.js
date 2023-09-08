import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import PageNotFound from './components/PageNotFound';
import CompanyDetails from './components/CompanyDetails';
import FinancialStatement from './components/FinancialStatement';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="details/:id" element={<Details />}>
      <Route index element={<CompanyDetails />} />
      <Route path="statement" element={<FinancialStatement />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Route>,
));
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
