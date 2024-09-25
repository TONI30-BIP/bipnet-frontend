import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resetpassword from "./pages/Resetpassword";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Productlist from "./pages/Productlist";
import Addblog from "./pages/Addblog";
import Addblogcat from "./pages/Addblogcat";
import Addproduct from "./pages/Addproduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/reset-password" element={<Resetpassword/>} />
        <Route path="/forgot-password" element={<Forgotpassword/>} />
        <Route path="/admin" element={<MainLayout/>} >
          <Route index element={<Dashboard/>} />
          <Route path="enquiries" element={<Enquiries/>} />
          <Route path="blog" element={<Addblog/>} />
          <Route path="blog-category" element={<Addblogcat/>} />
          <Route path="blog-list" element={<Bloglist/>} />
          <Route path="blog-category-list" element={<Blogcatlist/>} />
          <Route path="orders" element={<Orders/>} />
          <Route path="customers" element={<Customers/>} />
          <Route path="product" element={<Addproduct/>} />
          <Route path="product-list" element={<Productlist/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
