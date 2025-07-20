import { Fragment, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease-in-out',
            once: true, mirror: false
        });

        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const isLargeScreen = window.innerWidth >= 768;
            if (isLargeScreen) {
                setIsScrolled(window.scrollY > 0);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <Navbar isScrolled={isScrolled} />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
            <Footer />
        </Fragment>
    )
}

export default App