import React from "react";
import {Link} from "react-router-dom"

const BreadCrumb = (props) => {
    const { title } = props;
    return (
    <div className="breadcrumb mb-0 py-4">
        <div className="container-fluid">
            <div className="row gx-0">
                <div className="col-12 position-relative">
                    <p className="caption text-center align-items-center">
                        <Link to="/" className="home-here">
                            Home &nbsp;
                        </Link>
                        / {title} 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default BreadCrumb;