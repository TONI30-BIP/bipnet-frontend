import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
    <Meta title={"SignUp"} />
    <BreadCrumb title="SignUp"/>
    <Container class1="login-wrapper py-5">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
                <h3 className="text-center mb-3">Buat Akun</h3>
                <form action="d-flex flex-column gap-15">
                  <CustomInput
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    className="form-control"
                  />
                  <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                    <CustomInput
                      type="tel"
                      name="mobile"
                      placeholder="Nomor Telepon"
                      className="form-control"
                    />
                    <CustomInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  <div>
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                      <button className="button border-0" type="submit">Submit</button>
                      <Link className="button forgotpassword" to="/">Cancel</Link>
                    </div>
                  </div>
                </form>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
};

export default SignUp;