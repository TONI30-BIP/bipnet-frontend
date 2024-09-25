import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard"
import Container from "../components/Container";

const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const setting2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3
  };
  return (
    <>
      <section className="home-wrapper-1 pt-0 pb-5 mx-0">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div className="col-12">
              <div id="carouselIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button 
                    type="button" 
                    data-bs-target="#carouselIndicators" 
                    data-bs-slide-to="0" 
                    class="active" 
                    aria-current="true" 
                    aria-label="Slide 1">
                  </button>
                  <button 
                    type="button" 
                    data-bs-target="#carouselIndicators" 
                    data-bs-slide-to="1" 
                    aria-label="Slide 2">
                  </button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="img-content d-block w-100" src="images/header 1.jpg" alt="First slide" style={{ filter: 'brightness(50%)' }}/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5 className="text-white"> Temukan Koneksi Terbaik dengan Bipnet</h5>
                      <p className="text-white">Koneksi Cepat, Langganganan Hemat, Penuhi Semua Kebutuhan Anda</p>
                      <Link className="button">Daftar Sekarang!</Link>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="img-content d-block w-100" src="images/header 2.jpg" alt="Second slide" style={{ filter: 'brightness(50%)' }}/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5 className="text-white">Kelebihan Layanan Bipnet</h5>
                      <p className="text-white">Dapatkan layanan pelanggan 24/7, teknologi terbaru, dan koneksi yang selalu stabil.</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container class1="home-wrapper-2 pt-0 pb-5 mx-0">
          <div className="row">
            <div className="col-13">
              <div className="services-pic d-flex align-items-center justify-content-center">
                <div>
                  <img src="images/banner website.jpg" alt="banner website"/>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <section className="home-wrapper-3">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            
                <Slider {...settings}>  
                  
                  <div className="col-3">
                    <li className="card text-center border-danger mb-3 shadow p-3 mb-5 bg-body rounded">
                      <div class="card-header">
                        UNLIMITED
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">10 Mbps</h5>
                        <h4 class="card-title">Rp 125.000/bln</h4>
                        <p class="card-text">
                        <strong><em>Nikmati koneksi internet super cepat dengan paket 10 Mbps kami!</em></strong><br /><br />
                        <em>Paket ini ideal untuk browsing sehari-hari, streaming video HD, dan telekonferensi tanpa gangguan. Dapatkan kecepatan stabil yang memungkinkan Anda menggunakan hingga 5 perangkat secara bersamaan—cocok untuk keluarga kecil atau kantor rumah.</em>
                        </p>
                        <Link to="/promo" class="button">Pilih Paket</Link>
                      </div>
                    </li>
                  </div>
                  <div className="col-3">
                      <li className="card text-center border-danger mb-3 shadow p-3 mb-5 bg-body rounded">
                        <div class="card-header">
                          UNLIMITED
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">20 Mbps</h5>
                          <h4 class="card-title">Rp 165.000/bln</h4>
                          <p class="card-text">
                            <strong><em>Upgrade kecepatan internet Anda dengan paket 20 Mbps kami!</em></strong><br /><br /> 
                            <em>Ideal untuk streaming video HD, bermain game online, dan bekerja dari rumah tanpa lag. Paket ini mendukung hingga 10 perangkat secara bersamaan—perfect untuk keluarga besar atau usaha kecil.</em>
                          </p>
                          <Link to="/area" class="button">Pilih Paket</Link>
                        </div>
                      </li>
                  </div>
                  <div className="col-3">
                      <li className="card text-center border-danger mb-3 shadow p-3 mb-5 bg-body rounded">
                        <div class="card-header">
                          UNLIMITED
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">30 Mbps</h5>
                          <h4 class="card-title">Rp 220.000/bln</h4>
                          <p class="card-text">
                           <strong><em>Dapatkan performa maksimal dengan paket 30 Mbps kami!</em></strong><br /><br /> 
                            <em> Cocok untuk streaming 4K, video konferensi, dan multitasking dengan banyak perangkat. Dukungan hingga 15 perangkat secara bersamaan—ideal untuk bisnis kecil atau rumah dengan banyak pengguna.</em>
                          </p>
                          <Link to="/area" class="button">Pilih Paket</Link>
                        </div>
                      </li>
                    </div>
                    <div className="col-3">
                      <li className="card text-center border-danger mb-3 shadow p-3 mb-5 bg-body rounded">
                        <div class="card-header">
                          UNLIMITED
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">40 Mbps</h5>
                          <h4 class="card-title">Rp 275.000/bln</h4>
                          <p class="card-text">
                           <strong><em>Maksimalkan kecepatan internet Anda dengan paket 40 Mbps kami!</em></strong><br /><br />
                            <em>Ideal untuk rumah dengan banyak pengguna atau kantor kecil. Menyediakan kecepatan tinggi untuk streaming, gaming, dan bekerja dari rumah dengan dukungan hingga 20 perangkat secara bersamaan.</em> 
                          </p>
                          <Link to="/area" class="button">Pilih Paket</Link>
                        </div>
                      </li>
                    </div>
                    <div className="col-3">
                      <li className="card text-center border-danger mb-3 shadow p-3 mb-5 bg-body rounded">
                        <div class="card-header">
                          UNLIMITED
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">50 Mbps</h5>
                          <h4 class="card-title">Rp 330.000/bln</h4>
                          <p class="card-text">
                           <strong><em>Nikmati kecepatan super cepat dengan paket 50 Mbps kami!</em></strong><br /><br />
                           <em>Cocok untuk penggunaan berat seperti streaming 4K, gaming, dan telekonferensi dengan banyak pengguna. Paket ini mendukung hingga 25 perangkat secara bersamaan—pilihan sempurna untuk bisnis atau rumah besar.</em> 
                           </p>
                          <Link to="/area" class="button">Pilih Paket</Link>
                        </div>
                      </li>
                    </div>
                </Slider>
              </div>
            </div>
          
      </section>
      <section className="home-wrapper-4 pt-0 pb-5 mx-0">
        <div className="container-fluid px-4">
          <div className="row gx-0">
            <div className="col-12">
              <div className="company-pro d-flex align-items-start">
                <div className="content-container" style={{ width: '75%' }}>
                  <h4 className="title text-bold mt-5 mb-4">Tentang Kami</h4>
                    <p className="text-white">
                      PT. BROADBAND INDONESIA PRATAMA didirikan pada bulan Februari 2016, sebagai
                      perusahaan yang bergerak dalam bidang Sistem Informasi dan Telekomunikasi.
                      <br/>
                      <br/>
                      PT. BROADBAND INDONESIA PRATAMA memposisikan sebagai perusahaan yang fokus
                      pada pelanggan Perusahaan Telekomunikasi dan Seluler di Indonesia, selain itu pula
                      memberikan layanan kepada perusahaan yang mengedepankan kemudahan manajemen
                      perangkat dan sistem dalam mode Cloud Computing (komputasi awan). Dimana PT.
                      BROADBAND INDONESIA PRATAMA mengedepankan sebagai Managed Service Provider
                      dan System Integrator untuk Iaas (Infrastructure as a Service) dan SaaS (Software as a
                      Service). Iaas (Infrastructure as a Service) dan SaaS (Software as a Service) yang kami
                      berikan berdasarkan kebutuhan dan keinginan pelanggan atau konsumen dilingkungan
                      organisasi mereka. 
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-5 pt-0 pb-5 mx-0">
        <div className="container-fluid px-4">
          <div className="row gx-0">
            <div className="col-13">
              <div className="company-pro d-flex align-items-start">
                <div className="content-container" style={{ width: '75%' }}>
                  <div className="title-container">
                    <h4 className="title text-bold mt-5 mb-4">Visi</h4>
                  </div>
                  <p className="text-dark">
                    Menjadi perusahaan penyedia layanan Jasa (Managed Service Provider) yang inovatif
                    di bidang Telekomunikasi dan Infrastruktur dalam memberikan solusi dan kontribusi serta
                    nilai tambah bagi pelanggan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-6 pt-0 pb-5 mx-0">
        <div className="container-fluid px-4">
          <div className="row gx-0">
            <div className="col-13">
              <div className="company-pro d-flex align-items-start">
                <div className="content-container" style={{ width: '75%' }}>
                  <div className="title-container">
                    <h4 className="title text-bold mt-5 mb-4">Misi</h4>
                  </div>
                  <ol>
                    <li className="text-black">
                      Menjadi partner pemerintah dalam implementasi infrastruktur dan pengembangan
                      Jaringan Telekomunikasi di Indonesia.
                    </li>
                    <li className="text-black">
                      Menjadi partner perusahaan Telekomunikasi di Indonesia untuk mewujudkan perusahaan
                      Telekomunikasi yang efisien, efektif, transparan dengan berbasis Teknologi Informasi Komunikasi (TIK).
                    </li>
                    <li className="text-black">
                      Partner perusahaan swasta nasional, multinasional, dan BUMN di Indonesia dalam
                      penerapan manajemen sistem informasi dan layanan aplikasi serta infrastruktur jaringan
                      di lingkungan organisasinya.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-7 pt-0 pb-5 mx-0">
      <div className="container-fluid px-4">
        <div className="row gx-0">
          <div className="col-12">
            <div className="company-pro d-flex align-items-center justify-content-center">
              <div className="content-container w-100">
              <link
                  rel="stylesheet"
                  type="text/css"
                  charset="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
                />
            
                {/* Struktur Organisasi Title */}
                <h3 className="title text-bold text-center mt-5 mb-4">Struktur Organisasi</h3>

                  {/* Slider Container */}
                  <div className="slider-container d-flex flex-wrap justify-content-center">
                    {[
                      {
                        name: 'Atok Sugiharto, S.Kom',
                        image: 'images/foto pimpinan 1.jpg',
                        title: 'President Director',
                        quote: 'Kepemimpinan adalah tentang memberikan arah dan inspirasi kepada tim.'
                      },
                      {
                        name: 'Budi Santoso, S.Kom',
                        image: 'images/foto pimpinan 2.jpg',
                        title: 'Chief Technology Officer',
                        quote: 'Teknologi adalah alat untuk memberdayakan visi bisnis.'
                      },
                      {
                        name: 'Citra Ayu, S.Kom',
                        image: 'images/foto pimpinan 3.jpg',
                        title: 'Chief Operating Officer',
                        quote: 'Efisiensi operasional adalah kunci untuk kesuksesan bisnis yang berkelanjutan.'
                      },
                      {
                        name: 'Dewi Pratiwi, S.Kom',
                        image: 'images/foto_pimpinan_4.jpg',
                        title: 'Chief Financial Officer',
                        quote: 'Keuangan yang sehat adalah pondasi untuk pertumbuhan bisnis.'
                      }
                    ].map((pimpinan, index) => (
                      <div className="slider-item text-center" key={index}>
                        <img
                          src={pimpinan.image}
                          alt={`Pimpinan ${index + 1}`}
                          className="pimpinan-photo"
                        />
                        <h4 className="text-bold mt-3">{pimpinan.name}</h4>
                        <p className="text-dark mt-2">{pimpinan.title}</p>
                        <blockquote className="quote mt-2">
                          "{pimpinan.quote}"
                        </blockquote>
                      </div>
                    ))}
                  </div>

                {/* Garis Pemisah */}
                <hr className="section-divider mt-5 mb-5" />

                {/* Legalitas */}
                <div className="item-point-container">
                  {/* Legalitas Title */}
                  <h4 className="legalitas-title text-center mb-4">Legalitas</h4>

                  {[
                    'Akta Notaris : No.1 Tanggal 03 February 2016, Drs. MOHAMMAD YUSUF, S.H., Dipl. Eng.',
                    'Surat Pengesahan : AHU-0016048.AH.01.11.TAHUN 2016 TANGGAL 05 Februari 2016',
                    'NPWP : 75.329.679.7-541.000',
                    'SIUP : 057/12-05/PK/III/2016 1659/13',
                    'No PKP : S-98PKP/WPJ.23/KP.0203/2016',
                    'No Rek Bank : 137-00-5000100-3 Bank Mandiri KCP Kotagede Yogyakarta',
                    'TDP : 120516101573 1660/33',
                    'APJII : No Reg. : 484/APJII/K-2016',
                  ].map((item, index) => (
                    <div className="item-point d-flex align-items-center gap-10 justify-content-center" key={index}>
                      <img src="images/caret-right-fill.svg" alt="icon" className="mx-0" />
                      <p className="text-dark my-0 mx-0">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="home-wrapper-8">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div className="col-12 w-3/4 m-auto">
              <div className="company-pro d-flex">
                <h4 className="title text-dark text-bold mt-4 mb-4">Partners & Clients</h4>
              </div>
              <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
                />
              <div className="slider-container mt-20">
                <Slider {...setting2}>  
                  <div>
                    <img src="images/1-moratelindo.png" alt="Logo Moratelindo" />
                  </div>
                  <div>
                    <img src="images/2-apjii.png"/>
                  </div>
                  <div>
                    <img src="images/3-hurricane-electric.png"/>
                  </div>
                  <div>
                    <img src="images/4-fiberstar.png"/>
                  </div>
                  <div>
                    <img src="images/5-jala-lintas-media.png"/>
                  </div>
                  <div>
                    <img src="images/6-cisco.png"/>
                  </div>
                  <div>
                    <img src="images/7-mikrotik.png"/>
                  </div>
                  <div>
                    <img src="images/8-ubiquiti.png"/>
                  </div>
                  <div>
                    <img src="images/9-huawei.png"/>
                  </div>
                  <div>
                    <img src="images/10-gmedia.png"/>
                  </div>
                  <div>
                    <img src="images/11-tvri.png"/>
                  </div>
                  <div>
                    <img src="images/12-pos-indonesia.png"/>
                  </div>
                  <div>
                    <img src="images/13-prudential.png"/>
                  </div>
                  <div>
                    <img src="images/14-bank-bri.png"/>
                  </div>
                  <div>
                    <img src="images/15-kementrian-perhubungan.png"/>
                  </div>
                  <div>
                    <img src="images/16-gigatama-visimedia.png"/>
                  </div>
                  <div>
                    <img src="images/17-angkasapura.png"/>
                  </div>
                  <div>
                    <img src="images/18-MCT.png"/>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <Link className="to-blog text-dark" to="/blog">
                <h3 className="section-heading">Our Latest Blog</h3>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
       
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
            <div className="services-pic d-flex align-items-center justify-content-center">
            <div>
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
          </div>
       
      </Container>
    </>
  )
};

export default Home;
