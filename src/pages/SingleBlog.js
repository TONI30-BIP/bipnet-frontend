import React from "react"
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

import { GoArrowLeft } from "react-icons/go";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dynamic Blog Name"} />
    <BreadCrumb title="Dynamic Blog Name"/>
    <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                          <Link to="/blog" className="d-flex align-items-center gap-10">
                            <GoArrowLeft className="fs-4"/>Kembali ke Halaman Blog
                          </Link>
                            <h3 className="title">
                              Membangun Bersama BIPNet
                            </h3>
                            <img 
                              src="images/blog-1.jpg" 
                              className="img-fluid w-100 my-4" 
                              alt="blog"
                            />
                            <p>
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born and I 
                            will give you a complete account of the system, and 
                            expound the actual teachings of the great explorer of 
                            the truth, the master-builder of human happiness. No 
                            one rejects, dislikes, or avoids pleasure itself, 
                            because it is pleasure, but because those who do not 
                            know how to pursue pleasure rationally encounter 
                            consequences that are extremely painful. Nor again is 
                            there anyone who loves or pursues or desires to obtain 
                            pain of itself, because it is pain, but because 
                            occasionally circumstances occur in which toil and 
                            pain can procure him some great pleasure. To take a 
                            trivial example, which of us ever undertakes laborious 
                            physical exercise, except to obtain some advantage from 
                            it? But who has any right to find fault with a man who 
                            chooses to enjoy a pleasure that has no annoying 
                            consequences, or one who avoids a pain that produces no 
                            resultant pleasure?
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
    </>
  )
}

export default SingleBlog;