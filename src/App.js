import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./pages/admin/AdminHomePage/AdminHomePage";
import ForgotPasswordPage from "./pages/General/ForgotPasswordPage/ForgotPasswordPage";
import LoginPage from "./pages/General/LoginPage/LoginPage";
import DoctorHomepage from "./pages/admin/DoctorHomepage/DoctorHomepage";
import { createTheme, ThemeProvider } from "@mui/material";
import StatisiquePage from "./pages/admin/StatistiquePage/StatisiquePage";


const theme = createTheme({
  palette: {
    primary: {
      main: '#51E1DA',
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        {/* GENERAL */}
        {/* <Route path="/login" exact element={<LoginPage />} />
        <Route path="/forgot-password" exact element={<ForgotPasswordPage />} /> */}
        
        {/* ADMIN */}
       <Route path="/" exact element={<DoctorHomepage />} />
       <Route path="/admin" exact element={<AdminHomePage />} />
       <Route path="/admin/statistique"  element={<StatisiquePage />} />

      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

