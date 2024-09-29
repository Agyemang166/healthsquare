import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    // State to track the active link
    const [activeLink, setActiveLink] = useState('');

    // Function to handle link click
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            <div className='bg-[#0a8342] p-4 flex flex-row justify-between'>
                <p className='text-white md:text-right'>555-0198 123 Maple Street, Springfield, IL 62701</p>
                <p className='text-white md:text-left'>Monday - Saturday: 9am - 11.30 pm</p>
            </div>

            <div className='flex flex-row space-x-4 p-3 items-center px-6'>
                <div className='flex-none pr-40'>
                    <img src="/myImage.svg" alt="logo of healthsquare" />
                </div>

                <ul className='flex flex-row space-x-4'>
                    {['/', '/about', '/services', '/contact',].map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link}
                                onClick={() => handleLinkClick(link)}
                                className={`px-4 py-2 rounded ${activeLink === link ? 'bg-green-400 text-white' : 'text-black hover:bg-green-300'} `}
                            >
                                {link === '/' ? 'Home' : link.slice(1).replace('-', ' ').replace('/', ' ').charAt(0).toUpperCase() + link.slice(2)}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to='/'
                            onClick={() => handleLinkClick('/')}
                            className={`px-4 py-2 rounded ${activeLink === '/' ? 'bg-green-400 text-white' : 'text-black hover:bg-green-300'} `}
                        >
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
