import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeaderAdmin from './comps_admin/headerAdmin/headerAdmin';
import { clientRoutes } from './comps_client/clientRoutes'
import DatePicker from './comps_client/datePicker';
import {adminRoutes} from './comps_admin/adminRoutes'
import LoginUser from './general_comps.js/homePage';
import { usersRoutes } from './comps_users/usersRoutes';
import { clientsRoutes } from './comps_clients/clientsRoutes';
import { ProffesionalsRoutes } from './comps_proffesionals/proffesionalsRoutes';
import HomePage from './general_comps.js/homePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<HeaderAdmin />} />
        {/* <Route path="/test/*" element={<HeaderTest />} />
      <Route path="/*" element={<ClientNav />} /> */}
    </Routes>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/*" element={<h2>Page 404</h2>}/>
      {/* ADMIN ROUTES */}
      {adminRoutes()}
      {usersRoutes()}
      {clientsRoutes()}
      {ProffesionalsRoutes()}
      {clientRoutes()}
    </Routes>
    {/* <LoginUser/> */}
  </BrowserRouter>
  );
}

export default App;
