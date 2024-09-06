import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";


const Area = () => {
  return (
    <>
      <Meta title={"Area"} />
      <BreadCrumb title="Area"/>
      <div className="cust-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
           
            <div className="cust-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="cust-title mb-4">Isi Form</h3>
                  <form action="" className="d-flex flex-column gap-15">
                  <div>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Link Gmaps"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Nama"
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
                        placeholder="Nomor WA"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="5"
                        placeholder="Informasi Tambahan"  
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Kirim</button>
                    </div>
                  </form>
                </div>
                <div>
                  
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        PT. Broadband Indonesia Pratama menyediakan layanan Fiber Optic yang
                        bisa digunakan oleh berbagai kalangan. Dengan mengisi form ini
                        diharapkan pelanggan bisa segera mendapatkan layanan yang berhak
                        didapatkan dan terjamin kualitasnya.
                        <br/>
                        <br/>
                        Data ini dapat digunakan sebagai analisis letak klien yang
                        terjangkau layanan kami dan bisa juga menjadi bentuk pertimbangan
                        kami dalam mengambil keputusan kedepannya.
                        <br/>
                        <br/>
                        Silahkan mengisi alamat Anda untuk pengecekan coverage kami.
                        <br/>
                        <br/>
                      </li>
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
  );
};

export default Area;