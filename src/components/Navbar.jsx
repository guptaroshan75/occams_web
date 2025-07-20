import { useState } from "react";
import { Link } from 'react-router-dom';
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";

const Navbar = ({ isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const nav_menu = ['About', 'Services', 'Team', 'Resources', 'Contact']

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`md:fixed w-full z-50 ${isScrolled ? `fixed bg-[#fff] border-b 
            border-[#D3D3D3] lg:shadow-sm md:shadow-sm shadow-none` : 'absolute'}`}
        >
            <div className="mx-auto lg:px-14 md:px-8 px-7 py-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center" data-aos="fade-right">
                        <Link to='/'>
                            <img src={`${isScrolled ? '/assets/logo_white.svg' : '/assets/logo.svg'}`}
                                alt='logo' className="w-auto lg:h-[50px] md:h-[35px] h-[50px]"
                            />
                        </Link>
                    </div>

                    <div data-aos="zoom-in-up">
                        <div className={`md:flex items-center lg:gap-10 md:gap-5 gap-10 md:text-lg
                            hidden ${isScrolled ? 'text-black' : 'text-white'} font-semibold 
                            lg:text-lg text-xl`}
                        >
                            {nav_menu?.map((nav, index) => (
                                <Link to='#' key={index} className="hover:text-[#F36B21]">
                                    {nav}
                                </Link>
                            ))}

                            <button className={`${isScrolled ? 'text-black' : 'text-white'} 
                            cursor-pointer`
                            }>
                                <FiSearch size={20} />
                            </button>

                            <button className="bg-[#F36B21] cursor-pointer text-white px-7 py-2 
                            rounded-full text-sm font-semibold"
                            >
                                Login
                            </button>
                        </div>
                    </div>

                    <div className="w-full flex justify-end items-center md:hidden mt-4 gap-5"
                        data-aos="zoom-in-up"
                    >
                        <button className="text-white cursor-pointer">
                            <FiSearch size={22} />
                        </button>

                        <button className="text-white cursor-pointer" onClick={toggleMenu}>
                            {isMenuOpen ? <RxCross2 size={30} /> : <RiMenuLine size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className={`md:hidden absolute top-full left-1/2 transform -translate-x-1/2 
                    shadow-lg z-50 bg-white text-black rounded-xl w-[90%]`} data-aos="fade-right"
                    data-aos-offset="300" data-aos-easing="ease-in-sine"
                >
                    <div className="px-6 pb-4 flex flex-col gap-4">
                        <ul className="space-y-1.5 pt-4">
                            {nav_menu?.map((nav, index) => (
                                <div key={index}>
                                    <Link to='#' className="block font-medium hover:text-[#F36B21]"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {nav}
                                    </Link>

                                    <div className="border-b border-gray-200 pt-[7px]"></div>
                                </div>
                            ))}

                            <button className="mt-3 w-full bg-[#F36B21] px-4 py-2 font-semibold
                                text-sm text-white rounded-full cursor-pointer"
                            >
                                Login
                            </button>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar