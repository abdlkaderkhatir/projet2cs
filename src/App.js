import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./pages/admin/AdminHomePage/AdminHomePage";
import ForgotPasswordPage from "./pages/General/ForgotPasswordPage/ForgotPasswordPage";
import LoginPage from "./pages/General/LoginPage/LoginPage";
import DoctorHomepage from "./pages/admin/DoctorHomepage/DoctorHomepage";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* GENERAL */}
        {/* <Route path="/login" exact element={<LoginPage />} />
        <Route path="/forgot-password" exact element={<ForgotPasswordPage />} /> */}
        
        {/* ADMIN */}
       <Route path="/doctor" exact element={<DoctorHomepage />} />
       <Route path="/" exact element={<AdminHomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

