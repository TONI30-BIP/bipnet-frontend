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
                  <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label">Multiple files input</label>
                    <input className="form-control" type="file" id="formFileMultiple" multiple/>
                  </div>
                  <div>
                    <button className="button border-0">Kirim</button>
                  </div>
                </form>

                {/* Memindahkan informasi kontak di sini */}
                <div className="mt-4">
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaHome className="fs-5"/>
                      <address className="mb-0">Jl. Purbayan No.6 Kotagede Yogyakarta DIY 55173</address>
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

              <div>
                <div>
                <h2 className="fw-bold">Ajukan Proposal untuk UMKM dan Kegiatan Anda melalui “Sinergi Riko”</h2>
                  <p className="mt-3 justified-text">
                    Kami di BipNet percaya bahwa sinergi yang kuat dengan pelaku UMKM dan komunitas lokal akan membawa perubahan besar.
                    Melalui kampanye “Sinergi Riko”, kami membuka kesempatan bagi UMKM dan penyelenggara acara untuk mendapatkan dukungan 
                    dan memanfaatkan jaringan kami. Bersama-sama, kita bisa memperluas jangkauan usaha Anda dan meningkatkan visibilitas 
                    di tengah pasar yang kompetitif.
                  </p>
                  <p className="mt-3 justified-text">
                    Hanya melalui satu pintu, Anda dapat mengajukan proposal yang berpotensi membawa dampak besar bagi bisnis lokal. Kami 
                    siap mendukung kegiatan yang inovatif dan membangun, mulai dari pemasangan banner promosi hingga kolaborasi dalam event 
                    menarik seperti <strong>Nonton Bareng</strong> dan <strong>Program Referensi Penjualan</strong>.
                  </p>
                  <h3 className="fw-bold mt-4">Kenapa Harus Bergabung dengan “Sinergi Riko”?</h3>
                  <ul className="mt-3">
                    <li className="mb-2">Dukungan penuh dari BipNet untuk memperkenalkan teknologi internet ke komunitas lokal.</li>
                    <li className="mb-2">Visibilitas lebih tinggi untuk UMKM Anda melalui promosi bersama.</li>
                    <li className="mb-2">Peluang tambahan pendapatan dengan menjadi agen penjualan layanan WiFi BipNet.</li>
                    <li className="mb-2">Akses ke koneksi internet cepat dan stabil yang dibutuhkan untuk memperkuat bisnis Anda.</li>
                  </ul>
                  <p className="mt-4 text-justify">
                    Inilah kesempatan Anda untuk menjadi bagian dari gerakan yang memadukan teknologi dan kebersamaan lokal. Segera ajukan 
                    proposal dan mari bersinergi untuk membangun masa depan yang lebih terkoneksi!
                  </p>                  
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