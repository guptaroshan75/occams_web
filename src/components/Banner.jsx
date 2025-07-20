import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section style={{ backgroundImage: `url(/assets/banner.svg)` }} className='h-screen bg-cover 
            bg-no-repeat lg:bg-[90%] md:bg-center sm:bg-center bg-[80%] flex items-center'
        >
            <div className='lg:px-14 md:px-8 px-7 py-4 lg:mt-12 md:mt-10 mt-10' 
                data-aos="zoom-in-right"
            >
                <div className='flex flex-col md:flex-row md:items-start gap-4 
                    mb-3 lg:w-1/2 md:w-2/3 w-full'
                >
                    <h4 className='lg:text-[40px] text-4xl text-white font-semibold'>
                        <span className="hidden sm:inline">
                            Recognizing Potential. Driving Results. Creating Impact.
                        </span>

                        <span className="inline sm:hidden">Careers</span>
                    </h4>
                </div>

                <div>
                    <p className='text-white font-light lg:text-lg md:text-base
                        lg:w-1/2 md:w-2/3 w-full mb-8 sm:text-base text-sm'
                    >
                        At Occams, our people are at the heart of everything we do. We believe in
                        helping each person grow in a way that supports both their career goals and
                        our company’s vision. That’s how we attract great talent, keep them engaged,
                        and create lasting value for everyone.
                    </p>
                </div>

                <Link to='#' className="bg-[#F36B21] text-white font-semibold rounded-[30px]
                    text-base hover:bg-white hover:text-[#F36B21] py-2 px-8 mt-5"
                >
                    Find a Job
                </Link>
            </div>
        </section>
    )
}

export default Banner