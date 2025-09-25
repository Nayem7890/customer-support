import React from 'react';
import twitterImg from '../../assets/twitter.png'
import linkedinImg from '../../assets/linkedin.png'
import facebookImg from '../../assets/facebook.png'
import emailImg from '../../assets/email.png'

const Footer = () => {
    return (
        <div className='bg-black border-b-2 border-white pb-3'>
            <div className='max-w-11/12 mx-auto flex md:flex-row flex-col items-center text-white gap-3.5'>
                <div className='flex-1 py-12 space-y-3'>
                    <h2 className='text-2xl'>CS — Ticket System</h2>
                    <p className='text-[#A1A1AA]'>CS — Ticket System is dedicated to providing swift and effective solutions for all your needs. This problem ticketing system is your direct line to our support team, allowing you to track the status of your issues, access our comprehensive knowledge base, and open new requests with ease.</p>
                </div>
                <div className='flex-1 space-y-3'>
                    <h2 className='text-xl'>Company</h2>
                    <p className='text-[#A1A1AA]'>About Us</p>
                    <p className='text-[#A1A1AA]'>Our Mission</p>
                    <p className='text-[#A1A1AA]'>Contact Saled</p>
                </div>

                <div className='flex-1 space-y-3'>
                    <h2 className='text-xl'>Services</h2>
                    <p className='text-[#A1A1AA]'>Products & Services</p>
                    <p className='text-[#A1A1AA]'>Customer Stories</p>
                    <p className='text-[#A1A1AA]'>Download Apps</p>
                </div>

                <div className='flex-1 space-y-3'>
                    <h2 className='text-xl'>Information</h2>
                    <p className='text-[#A1A1AA]'>Privacy Policy</p>
                    <p className='text-[#A1A1AA]'>Terms & Conditions</p>
                    <p className='text-[#A1A1AA]'>Join Us</p>
                </div>
                <div className='flex-1 space-y-3'>
                    <h2 className='text-xl'>Social Links</h2>
                    <p className='flex text-[#A1A1AA]'><img src={twitterImg} alt="" /> @CS — Ticket System</p>
                    <p className='flex text-[#A1A1AA]'><img src={linkedinImg} alt="" /> @CS — Ticket System</p>
                    <p className='flex text-[#A1A1AA]'><img src={facebookImg} alt="" /> @CS — Ticket System</p>
                    <p className='flex text-[#A1A1AA]'><img src={emailImg} alt="" /> @CS — Ticket System</p>
                    
                </div>
            </div>
            <p className='text-[#FAFAFA] text-center pt-4 mt-4 border-t border-gray-600 pb-3'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    );
};

export default Footer;