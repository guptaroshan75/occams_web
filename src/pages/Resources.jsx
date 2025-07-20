const Resources = () => {
    return (
        <div className="lg:px-14 md:px-8 px-7 lg:py-6 py-4">
            <div className="text-center max-w-3xl mx-auto lg:mb-10 mb-6" data-aos="zoom-in">
                <h2 className="lg:text-4xl text-2xl font-bold text-center linear-text-gradient">
                    The Occams Edge
                </h2>

                <p className="lg:text-lg md:text-base text-sm">
                    We’re not just building a workplace — we’re creating a launchpad. A place where
                    your work matters, your growth is supported, and your impact is real.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-8 md:gap-6 gap-5 items-center">
                <div className="md:col-span-6 lg:col-span-5" data-aos="zoom-in">
                    <img src="/assets/occams_edge.svg" alt="Occams Edge"
                        className="w-full h-auto lg:rounded-none md:rounded-none rounded-xl"
                    />
                </div>

                <div className="md:col-span-6 lg:col-span-7 max-w-3xl" data-aos="fade-right">
                    <div className="lg:w-2/3 w-full lg:mb-12 md:mb-6 mb-4 font-semibold text-black">
                        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-base">
                            Come build what’s next with us.
                        </h2>
                    </div>

                    <h3 className="lg:text-3xl md:text-xl sm:text-2xl text-base 
                        font-semibold text-black mb-1"
                    >
                        Celebrating our people-first culture:
                    </h3>

                    <p className="lg:text-lg md:text-lg sm:text-base text-sm">
                        We’re proud to be recognized not only for business impact, but for building
                        an exceptional workplace. Some of our recent accolades include:
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Resources