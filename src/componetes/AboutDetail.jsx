import React from 'react';
import './AboutDetail.scss';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const AboutDetail = () => {
    return (
        <div className="app__about-detail">
            <div className="container">
                <div className="app__about-img">
                    <img src="logo_about.png" alt="logo" />
                </div>
                <div className="app__about-text">
                    <p className="p-text">
                        The Product Management System is a versatile tool
                        designed to empower users with efficient control over
                        their product inventory. This comprehensive application
                        offers a user-friendly platform for managing and
                        organizing products. our system streamlines your
                        inventory management process. With features such as
                        product tracking, easy addition of new items, quick
                        editing of product details, real-time availability
                        updates, and seamless product deletion, this system
                        provides a complete solution for optimizing your product
                        management workflow. Below, we provide a more in-depth
                        breakdown of the key functionalities and benefits of
                        this project.
                    </p>
                    <Link to="/">
                        <AiOutlineArrowLeft /> back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutDetail;
