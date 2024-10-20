import logo from "./logo.svg";
import "./App.css";
import LogInScreen from "./components/LogInScreen";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen";
import CheckEmailScreen from "./components/CheckEmailScreen";
import ResetPasswordScreen from "./components/ResetPasswordScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Teachers from "./components/Teachers";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<LogInScreen />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/check-email" element={<CheckEmailScreen />} />
        <Route path="/reset-password" element={<ResetPasswordScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
