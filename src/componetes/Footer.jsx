import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import './Footer.scss';

const SocialMedia = () => (
    <div className="app__footer">
        <div className="app__social">
            <div>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com/young_pac_101"
                >
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://t.me/aman_221SE"
                >
                    <FaTelegramPlane />
                </a>
            </div>
            <div>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/amanuel-dereje-890b03148"
                >
                    <BsLinkedin />
                </a>
            </div>
        </div>

        <div className="copyright">
            <p className="p-text">@2023 PMS</p>
            <p className="p-text">All rights reserved</p>
        </div>
    </div>
);

export default SocialMedia;
