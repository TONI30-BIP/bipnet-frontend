import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import Container from "../components/Container";


const Proposal = () => {
  return (
    <>
      <Meta title={"Proposal"} />
      <BreadCrumb title="Proposal"/>
      <Container class1="cust-wrapper home-wrapper-2">
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
                        placeholder="Nama Pengirim"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Asal Perusahaan/Institusi"
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
                        placeholder="Nomor WA Penanggung Jawab"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="5"
                        placeholder="Tujuan"  
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="formFileMultiple" class="form-label">Multiple files input</label>
                      <input class="form-control" type="file" id="formFileMultiple" multiple/>
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
                        PT. BROADBAND INDONESIA PRATAMA didirikan pada bulan 
                        Februari 2016, sebagai perusahaan yang bergerak dalam 
                        bidang Sistem Informasi dan Telekomunikasi.
                        <br/>
                        <br/>
                        PT. BROADBAND INDONESIA PRATAMA memposisikan sebagai 
                        perusahaan yang fokus pada pelanggan Perusahaan 
                        Telekomunikasi dan Seluler di Indonesia, selain itu 
                        pula memberikan layanan kepada perusahaan yang 
                        mengedepankan kemudahan manajemen perangkat dan sistem 
                        dalam mode Cloud Computing (komputasi awan). Dimana PT. 
                        BROADBAND INDONESIA PRATAMA mengedepankan sebagai 
                        Managed Service Provider dan System Integrator untuk 
                        Iaas (Infrastructure as a Service) dan SaaS (Software as a Service). Iaas 
                        (Infrastructure as a Service) dan SaaS (Software as a 
                        Service) yang kami berikan berdasarkan kebutuhan dan 
                        keinginan pelanggan atau konsumen dilingkungan organisasi 
                        mereka.
                        
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
    </Container>
    </>
  );
};

export default Proposal;