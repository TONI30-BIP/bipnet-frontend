import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Promo = () => {
  return (
    <>
      <Meta title={"Promo"} />
      <BreadCrumb title="Promo"/>
      <Container class1="promo-wrapper pt-0 pb-5 mx-0">
          <div className="row">
            <div className="col-13 align-items-center justify-content-center">
              <div className="services-pic d-flex">
                <div>
                  <div class="card mb-3 border-danger">
                   <img src="images/promo-1.jpg" class="card-img-top" alt="Promo-1"/>
                    <div class="card-body">
                      <h5 class="card-title text-center">Card title</h5>
                      <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <a href="https://wa.me/6282124762917?text=Halo,%20saya%20ingin%20mengambil%20promo%20pengguna%20baru" class="btn btn-primary">Ambil Promo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
};

export default Promo;