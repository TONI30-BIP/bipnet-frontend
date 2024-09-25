import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="blog-content border-shadow">
                <p className="date">UNLIMITED</p>
                <h4 className="title">Rp 125.000/bln</h4>
                <h5 className="title">10Mbps</h5>
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