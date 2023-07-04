import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeaderAdmin from './comps_admin/headerAdmin/headerAdmin';
import {adminRoutes} from './comps_admin/adminRoutes'
import LoginUser from './general_comps.js/homePage';
import { usersRoutes } from './comps_users/usersRoutes';
import { clientsRoutes } from './comps_clients/clientsRoutes';
import { ProffesionalsRoutes } from './comps_proffesionals/proffesionalsRoutes';
import HomePage from './general_comps.js/homePage';
import Footer from './comps_general/footer';

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
      {/* {clientRoutes()} */}
    </Routes>
    {/* <LoginUser/> */}
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
