import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const footer_menu = [
        'About', 'Contact', 'Philosophy', 'Press Releases', 'Team', 'Awards'
    ]

    const service_menu = [
        'Blogs', 'Press Release', 'Micro Insights', 'Podcasts', 'Events',
        'Testimonials', 'Get Started'
    ]

    const services = [
        'Business Services & Growth Incubation', 'Capital Markets & Investment Banking',
        'Financial Technology & Payment Solutions', 'Tax Credits'
    ]

    return (
        <footer className="bg-white text-black lg:px-14 md:px-8 px-7 pb-7 pt-3">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 
                lg:py-8 md:py-7 py-6"
            >
                <div>
                    <img src="/assets/logo_white.svg" alt="Occams Logo"
                        className="w-[140px] lg:mb-6 md:mb-5 mb-4" data-aos="fade-right"
                    />

                    <h4 className="font-semibold text-[#F36B21] mb-1 lg:text-xl 
                        md:text-lg text-base hidden md:block"
                    >
                        Corporate Head Office
                    </h4>

                    <p className="lg:text-base md:text-lg text-base hidden md:block">
                        1962 Main Street, Suite 420, Sarasota, Florida 34236
                    </p>

                    <h4 className="font-semibold text-[#F36B21] lg:text-xl 
                        md:text-lg text-lg lg:mt-8 md:mt-6"
                    >
                        Connect With Us
                    </h4>

                    <div className="flex gap-3 text-base lg:mt-3 md:mt-2 mt-3" data-aos="fade-right">
                        <div className='h-9 w-9 rounded-full border border-black cursor-pointer
                            flex items-center justify-center hover:text-[#F36B21] hover:border-[#F36B21]'
                        >
                            <FaXTwitter />
                        </div>

                        <div className='h-9 w-9 rounded-full border border-black cursor-pointer
                            flex items-center justify-center hover:text-[#F36B21] hover:border-[#F36B21]'
                        >
                            <FaFacebookF />
                        </div>

                        <div className='h-9 w-9 rounded-full border border-black cursor-pointer
                            flex items-center justify-center hover:text-[#F36B21] hover:border-[#F36B21]'
                        >
                            <FaLinkedinIn />
                        </div>

                        <div className='h-9 w-9 rounded-full border border-black cursor-pointer
                            flex items-center justify-center hover:text-[#F36B21] hover:border-[#F36B21]'
                        >
                            <FaTiktok />
                        </div>

                        <div className='h-9 w-9 rounded-full border border-black cursor-pointer
                            flex items-center justify-center hover:text-[#F36B21] hover:border-[#F36B21]'
                        >
                            <img src='/icons/newsletter.svg' />
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <h4 className="font-semibold text-[#F36B21] lg:text-xl 
                        md:text-lg text-base lg:mb-4 md:mb-3"
                    >
                        Know Us Better
                    </h4>

                    <ul className="space-y-2 lg:text-sm md:text-base text-sm">
                        {footer_menu.map((item, index) => (
                            <div key={index}>
                                <Link to="#">{item}</Link>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:block">
                    <h4 className="font-semibold text-[#F36B21] lg:text-xl 
                        md:text-lg text-base lg:mb-4 md:mb-3"
                    >
                        Services
                    </h4>

                    <ul className="space-y-2 lg:text-sm md:text-base text-sm">
                        {services?.map((item, index) => (
                            <div key={index}>
                                <Link to="#">{item}</Link>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:block">
                    <h4 className="font-semibold text-[#F36B21] lg:text-[22px] 
                        md:text-xl text-lg lg:mb-4 md:mb-3"
                    >
                        Services
                    </h4>

                    <ul className="space-y-2 lg:text-sm md:text-base text-sm">
                        {service_menu?.map((item, index) => (
                            <div key={index}>
                                <Link to="#">{item}</Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="lg:text-base md:text-sm sm:text-sm text-xs font-normal lg:pb-2 lg:p-0 
                md:p-0 md:pb-2 sm:pb-3 sm:p-0 p-4 sm:bg-transparent bg-[#ECECEC] 
                sm:rounded-none rounded-lg"
            >
                <p className="">
                    © 2024 Occams Advisory. All Rights Reserved. Occams Advisory provides independent
                    corporate services. All other trademarks, company names, product names and brand
                    names are the property of their respective owners. For further details refer{" "}
                    <Link to="#" className="underline">Privacy Policy</Link> &{" "}
                    <Link to="#" className="underline">Terms of Use</Link>.
                </p>
            </div>
        </footer>
    );
};

export default Footer