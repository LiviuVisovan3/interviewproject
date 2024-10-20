import logo from "./logo.svg";
import "./App.css";
import LogInScreen from "./components/LogInScreen";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";
import CheckEmailScreen from "./components/CheckEmailScreen";
import ResetPasswordScreen from "./components/ResetPasswordScreen";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Teachers from "./components/Teachers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homescreen" element={<Sidebar />}>
          <Route path="/homescreen" element={<Dashboard />} />
          {/* <Route path="/teachers" element={<Teachers />} /> */}
        </Route>
        <Route path="/" element={<LogInScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/check-email" element={<CheckEmailScreen />} />
        <Route path="/reset-password" element={<ResetPasswordScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
