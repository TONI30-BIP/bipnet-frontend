import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="first-footer py-4">
                <div className="container-xxl">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                            <div className="footer-top-data d-flex gap-2 align-items-center justify-content-center">
                                <img src="images/postcard.svg" alt="Newsletter Icon"/>
                                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group mt-3 subscribe-input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="second-footer py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-2 mx-5">
                            <h4 className="text-white mb-4">Tentang BIPNet</h4>
                            <div>
                                <p className="text-white">
                                PT. BROADBAND INDONESIA PRATAMA <br/>
                                didirikan pada bulan Februari 2016, sebagai
                                perusahaan yang bergerak dalam bidang <br/>
                                Sistem Informasi dan Telekomunikasi. 
                                </p>
                                <a href="tel:+6282124762915" className="d-block text-white">
                                    <img src="images/telephone.svg" className="telephone-icon"/>
                                    0821-2476-2915
                                </a>
                                <a href="mailto:info@bipnet.co.id" className="text-white">
                                    <img src="images/mailbox.svg" className="email-icon"/>
                                    info@bipnet.co.id
                                </a>
                                <div className="social-icons d-flex align-item-center gap-30 mt-4">
                                    <a className="text-white" href="https://www.linkedin.com/company/pt-broadband-indonesia-pratama/">
                                        <img src="images/linkedin.svg" alt="LinkedIn"></img>
                                    </a>
                                    <a className="text-white" href="https://www.facebook.com/bipjogja/">
                                        <img src="images/facebook.svg" alt="Facebook"></img>
                                    </a>
                                    <a className="text-white" href="https://www.instagram.com/bipnet.id/">
                                        <img src="images/instagram.svg" alt="Instagram"></img>
                                    </a>
                                    <a className="text-white" href="https://vm.tiktok.com/ZSYwtSdMB/">
                                        <img src="images/tiktok.svg" alt="TikTok"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 mx-5">
                            <h4 className="text-white mb-4">Kantor <br/> Yogyakarta</h4>
                            
                                <p className="text-white">
                                    Jl. Purbayan No.6 Kotagede Yogyakarta DIY 55173 
                                    
                                </p>
                            <h4 className="text-white mb-4">Jam Operasi</h4>
                            
                                <p className="text-white">
                                    Senin-Jumat
                                    <br/>
                                    08:00 - 16:00 WIB
                                    <br/>
                                    Sabtu
                                    <br/>
                                    08:00 - 15:00 WIB  
                                </p>
                        
                        </div>
                        <div className="col-2 mx-5">
                            <h4 className="text-white mb-4 mt-3">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link to="/privacy-policy" className="text-white py-2 mt-1">Privacy Policy</Link>
                                <Link to="/refund-policy" className="text-white py-2">Refund Policy</Link>
                                <Link to="/termsofservice" className="text-white py-2">Terms of Service</Link>
                                <Link to="/faq" className="text-white py-2">FAQ</Link>
                                <Link to="/layanan" className="text-white py-2">Layanan Kami</Link>
                                <Link to="/blog" className="text-white py-2">Blog</Link>
                            </div>
                        </div> 
                        <div className="col-2 mx-5">
                            <h4 className="text-white mb-4 mt-2">Company Profile</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2">Tentang Kami</Link>
                                <Link className="text-white py-2">Partner & Klien</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 mb-0 text-white">
                            <p className="text-center">
                                &copy; {new Date().getFullYear()}; Designated by Evallestam
                            </p>

                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;