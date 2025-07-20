import { Link } from 'react-router-dom';

const AboutUs = () => {

    return (
        <div className="lg:px-14 md:px-8 px-0">
            <div className="bg-[#FFEFE7] lg:p-10 md:p-8 p-7 lg:rounded-3xl md:rounded-3xl 
                    rounded-none mt-6"
            >
                <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-7 items-center">
                    <div className="order-2 lg:order-none w-full" data-aos="zoom-in">
                        <img src="/assets/about.svg" alt="Illustration"
                            className="lg:w-[450px] md:w-82 w-80 h-auto"
                        />
                    </div>

                    <div className="order-1 lg:order-none w-full md:text-left" data-aos="fade-right">
                        <h4 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl 
                            font-semibold text-black lg:mb-3 mb-2.5"
                        >
                            Our Guiding Belief:
                        </h4>

                        <h2 className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl lg:mb-4 
                            mb-3.5 text-black font-bold capitalize"
                        >
                            The HCMI North Star 
                        </h2>

                        <p className="lg:text-xl md:text-lg text-base mb-6">
                            We work side by side with our people to help them reach their full
                            potential, making sure their career paths are clearly connected to where
                            Occams is heading. This belief is behind everything we do, from how
                            we lead and collaborate to how we innovate and move forward.
                        </p>

                        <div className="flex flex-row gap-4">
                            <Link to="#" className="bg-[#F36B21] text-white lg:px-6 md:px-6 
                                sm:px-4 px-3 py-2 rounded-full font-semibold text-sm"
                            >
                                Find a Job
                            </Link>


                            <button className="border border-[#1e1e1e] text-[#1e1e1e] lg:px-6 
                                md:px-6 sm:px-4 px-3 py-2 rounded-full font-semibold cursor-pointer
                                text-sm hover:bg-[#1e1e1e] hover:text-white transition"
                            >
                                <span className="hidden lg:inline">Read Our Mission & Values</span>
                                <span className="inline lg:hidden">Visit About us page</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs