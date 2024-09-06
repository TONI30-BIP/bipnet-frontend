import React from 'react';
import '../src/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layanan from './pages/Layanan';
import Area from './pages/Area';
import Promo from './pages/Promo';
import FAQ from './pages/FAQ';
import Proposal from './pages/Proposal';
import Pembayaran from './pages/Pembayaran';
import Blog from './pages/Blog';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="layanan" element={<Layanan />} />
            <Route path="area" element={<Area />} />
            <Route path="promo" element={<Promo />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="proposal" element={<Proposal />} />
            <Route path="blog" element={<Blog/>} />
            <Route path="blog/:id" element={<SingleBlog/>} />
            <Route path="login" element={<Login/>} />
            <Route path="forgot-password" element={<ForgotPassword/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="reset-password" element={<ResetPassword/>} />
            <Route path="termsofservice" element={<TermsOfService/>} />
            <Route path="refund-policy" element={<RefundPolicy/>} />
            <Route path="privacy-policy" element={<PrivacyPolicy/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
