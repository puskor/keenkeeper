import React from 'react';
import footerLogo from "../../assets/image/logo-xl.png"
import instra from "../../assets/image/instagram.png"
import facebook from "../../assets/image/facebook.png"
import x from "../../assets/image/twitter.png"

const Footer = () => {
    return (
        <div className='container mx-auto items-center justify-center flex flex-col text-white space-y-10 px-4 md:px-0'>
            <img src={footerLogo} alt="" />
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div className='flex flex-col items-center justify-center'>
                <h3>Social Links</h3>
                <li className='flex gap-3'>
                    <img src={instra} alt="" />
                    <img src={facebook} alt="" />
                    <img src={x} alt="" />
                </li>
            </div>
            <div className='flex  flex-col md:flex-row justify-between w-full border-t border-gray-400 pt-5'>
                <h1>© 2026 KeenKeeper. All rights reserved.</h1>
                <div className='flex gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;