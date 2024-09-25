import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput"


const ResetPassword = () => {
  return (
    <>
    <Meta title={"ResetPassword"} />
    <BreadCrumb title="ResetPassword"/>
    <Container class1="login-wrapper py-5">
         
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-1">Ulang Password</h3>
                <p className="text-center">
                    Halaman ini untuk Anda mengganti password
                </p>
                <form action="d-flex flex-column gap-15">
                  <CustomInput 
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                  <CustomInput
                    type="password"
                    name="confpassword"
                    placeholder="Confirm Password"
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
}

export default ResetPassword