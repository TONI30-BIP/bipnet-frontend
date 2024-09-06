import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <p className="text-white mb-0">
                Internet Service Provider & Data Center
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <img src="images/telephone.svg" className="telephone-icon"/>
              <p className="text-end text-white mb-0">
                <a className="text-white" href="tel:+6282124762916">
                  0821 2476 2916
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3 sticky-top">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <Link className="d-flex align-items-center gap-10 text-white px-5 py-3">
                <img
                  src="images/logo-bipnet-1.png"
                  className="icon-bipnet"
                />
              </Link>
            </div>
            <div className="col-10">
              <div className="header-upper-links d-flex align-items-center justify-content-end mx-0">
                <div className="link-item">
                  <Link className="d-flex align-items-center gap-10 text-white" to="/">
                    <img src="images/door-open.svg" />
                    <p className="mr-5 pt-3">Home</p>
                  </Link>
                </div>
                <div className="link-item">
                  <Link className="d-flex align-items-center gap-10 text-white" to="/layanan">
                    <img src="images/wifi.svg"/>
                    <p className="mr-5 pt-3">Layanan</p>
                  </Link>
                </div>
                <div className="link-item">
                  <Link className="d-flex align-items-center gap-10 text-white" to="/area">
                    <img src="images/broadcast-pin.svg" />
                    <p className="mr-5 pt-3">Area</p>
                  </Link>
                </div>
                <div className="link-item">
                  <Link className="d-flex align-items-center gap-10 text-white" to="/promo">
                    <img src="images/ticket-perforated.svg" />
                    <p className="mr-5 pt-3">Promo/Kupon</p>
                  </Link>
                </div>
                <div className="link-item">
                  <Link className="d-flex align-items-center gap-10 text-white" to="/faq">
                    <img src="images/calendar2-check.svg" />
                    <p className="mr-5 pt-3">FAQ</p>
                  </Link>
                </div>
                <div className="link-item dropdown align-items-center gap-0">
                  <img src="images/chat-left-dots.svg" />
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 mr-5 pt-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className=" pt-1 d-inline-block text-white">Hubungi Kami</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-items text-dark py-1 px-1" to="/proposal">
                        Proposal
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-items text-dark py-1 px-1" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-items text-dark py-1 px-1" to="https://wa.me/message/OL6DLQABCE4ZN1">
                        Pembayaran
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="link-item dropdown align-items-center gap-0">
                  <img src="images/person.svg" />
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 mr-3 pt-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className=" pt-1 d-inline-block text-white">Akun</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-items text-dark py-1 px-1" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-items text-dark py-1 px-1" to="/signup">
                        Buat Akun
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
