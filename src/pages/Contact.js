import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <Meta title={"Customer Service"} />
      <BreadCrumb title="Customer Service"/>
      <div className="cust-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6263217923474!2d110.4000454731954!3d-7.829315077766545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5722096e908b%3A0x3ab89a0d58c847ba!2sBroadband%20Indonesia%20Pratama%20(Bipnet)%20Pt.%2C%20Purbayan%2C%20Kec.%20Kotagede%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sen!2sid!4v1723100926045!5m2!1sen!2sid" 
                width="600" 
                height="450" 
                className="border-0 w-100"
                allowfullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="cust-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="cust-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="5"
                        placeholder="Comments"  
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Kirim</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="cust-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaHome className="fs-5"/>
                        <address className="mb-0">
                        Jl. Purbayan No.6 Kotagede Yogyakarta DIY 55173
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsFillTelephoneFill className="fs-5"/>
                        <a className="text-dark" href="tel:+62 82124762916">+62 821-2476-2916</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoIosMail className="fs-5"/>
                        <a className="text-dark" href="mailto:info@bipnet.co.id">info@bipnet.co.id</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaClock className="fs-5"/>
                        <p className="mb-0">
                          Senin - Jumat 08.00 - 16.00
                          <br/>
                          Sabtu 08.00 - 15.00 
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;