import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HeaderAdmin from './comps_admin/headerAdmin/headerAdmin';
import {adminRoutes} from './comps_admin/adminRoutes'
import LoginUser from './comps_users/loginUser';
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
      <Route path="/*" element={<h2>Page 404</h2>}/>
      {/* ADMIN ROUTES */}
      {adminRoutes()}
     
    </Routes>
    <LoginUser/>
  </BrowserRouter>
  );
}

export default App;
