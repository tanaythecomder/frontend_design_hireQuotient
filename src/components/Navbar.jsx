import React, { useState } from 'react';
import Button from './Button';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isCutting, setIsCutting] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    const handleCut = () => {
        // Implement your cut action logic here
        console.log('Cut action triggered!');
        setIsCutting(!isCutting); // Toggle the state
    };

    return (
        <nav className="  w-full sticky top-0 z-10 border-b border-gray-200 bg-[#fef9f6]">
            <div className="max-w-screen-xl flex flex-wrap items-center md:justify-around justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                    
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            width="18"
                            height="18"
                        >
                            <rect width="150%" height="150%" fill="#F1F2F4" rx="10" />
                            <polygon points="50,5 95,95 5,95" fill="black" />
                        </svg>
                    
                    <span className="self-center text-s font-semibold whitespace-nowrap dark:text-white">Milton</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Button customStyle={"hidden md:block transition-transform transform hover:scale-110 "} content={"Log in"} bgColor={true} />
                    <Button customStyle={"hidden md:block transition-transform transform hover:scale-110 "} content={"Get started"} bgColor={false} />
                    {/* <button
                        type="button"
                        className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Get started
                    </button> */}
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center w-12  justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMobileMenuOpen}
                        onClick={() => {
                            toggleMobileMenu()
                            handleCut()
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isCutting ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {/* <rect x="4" y="2" width="16" height="20" rx="2" ry="2" /> */}
                                <line x1="9" y1="7" x2="30" y2="7" />
                                <line x1="9" y1="12" x2="30" y2="12" />
                                <line x1="9" y1="17" x2="30" y2="17" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="4" y1="2" x2="20" y2="20" />
                                <line x1="20" y1="2" x2="4" y2="20" />
                                {/* <rect x="4" y="2" width="16" height="20" rx="2" ry="2" /> */}
                            </svg>

                        )}
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'
                        }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col text-gray-600 text-lg p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 hover:text-black hover:underline " aria-current="page">
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 hover:text-black hover:underline ">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 hover:text-black hover:underline  ">
                                Princing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 hover:text-black hover:underline  ">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 hover:text-black hover:underline  ">
                                Blog
                            </a>
                        </li>
                        <li>
                            <Button customStyle={"md:hidden transition-transform transform hover:scale-110 "} content={"Log in"} bgColor={true} />

                        </li>
                        <li>

                            <Button customStyle={"md:hidden transition-transform transform hover:scale-110 "} content={"Sign Up"} bgColor={false} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
