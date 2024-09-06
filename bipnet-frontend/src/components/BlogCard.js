import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content border-shadow">
                <p className="date">6 Aug, 2024</p>
                <h5 className="title">Lorem Ipsum</h5>
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                    querat accusamus officia
                </p>
                <Link to="/blog/:id" className="button">
                    Read More
                </Link>
            </div>
        </div> 
    )
}

export default BlogCard;