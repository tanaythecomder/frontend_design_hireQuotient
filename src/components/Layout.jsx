import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { useSpring, animated } from 'react-spring';

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const slideInAnimation = useSpring({
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        config: { easing: 'ease'}
    });

    useEffect(() => {
        // Trigger the animation on the initial render
        setTimeout( ()=>{

            setIsOpen(true);
        },100)
    

        // Clean up the timeout to avoid memory leaks
        // return () => clearTimeout(timeoutId);
    }), [];
    return (
        <>
            <div>
                {/* <animated.nav style={slideInAnimation} >
                </animated.nav > */}
                    <Navbar  />
                <main className={`mt-[80px] content ease-in-out duration-500 `} >
                    {children}
                </main>

                <Footer />
            </div>


        </>
    )
}

export default Layout