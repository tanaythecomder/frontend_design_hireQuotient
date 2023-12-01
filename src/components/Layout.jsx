import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';

const Layout = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const contentPosition = document.querySelector('.content').getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (contentPosition < screenHeight * 0.75) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div>

                <Navbar />
                <main className={`mt-[80px] content transition-transform transition-opacity ease-in-out duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
                    {children}
                </main>

                <Footer/>
            </div>


        </>
    )
}

export default Layout