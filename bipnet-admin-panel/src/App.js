import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resetpassword from "./pages/Resetpassword";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/reset-password" element={<Resetpassword/>} />
        <Route path="/forgot-password" element={<Forgotpassword/>} />
        <Route path="/admin" element={<MainLayout/>} />
          <Route index element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
