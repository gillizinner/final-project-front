import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeaderAdmin from './comps_admin/headerAdmin/headerAdmin';
import { adminRoutes } from './comps_admin/adminRoutes'
import { clientRoutes } from './comps_client/clientRoutes'
import DatePicker from './comps_client/datePicker';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<HeaderAdmin />} />
        {/* <Route path="/test/*" element={<HeaderTest />} />
      <Route path="/*" element={<ClientNav />} /> */}
      </Routes>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/*" element={<h2>Page 404</h2>} />
        {/* ADMIN ROUTES */}
        {adminRoutes()}
      </Routes>
      <Routes>
        {clientRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
