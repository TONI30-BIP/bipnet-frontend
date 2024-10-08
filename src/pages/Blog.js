import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Blog = () => {
  return (
    <>
        <Meta title={"Blog"} />
        <BreadCrumb title="Blog"/>
        <Container class1="blog-wrapper home-wrapper-2 py-5">
          
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Ingin Tahu Apa?</h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Home</li>
                                    <li>Pembayaran</li>
                                    <li>Blogs</li>
                                    <li>Kontak</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="cover-blog col-6 mb-3">
                                <BlogCard/>
                            </div>
                            <div className="cover-blog col-6 mb-3">
                                <BlogCard/>
                            </div>
                            <div className="cover-blog col-6 mb-3">
                                <BlogCard/>
                            </div>
                            <div className="cover-blog col-6 mb-3">
                                <BlogCard/>
                            </div>
                            <div className="cover-blog col-6 mb-3">
                                <BlogCard/>
                            </div>
                            <div className="cover-blog col-6 mb-3">
                                <BlogCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
       
    </>
  )
};

export default Blog;