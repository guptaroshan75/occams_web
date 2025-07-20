const WorkAtOccams = () => {
    const items = [
        {
            icon: "/icons/shuffle.png",
            title: "Exceptional Benefits and Total Flexibility",
            text: "Get competitive compensation, bonuses, health benefits, wellness support and more. Rewards that reflect your impact."
        },
        {
            icon: "/icons/ownership.png",
            title: "A Culture of Ownership, Agility, and Openness",
            text: "Own your ideas from day one, work autonomously in high-trust teams, move fast, and collaborate in a radically flat, transparent environment."
        },
        {
            icon: "/icons/employee.png",
            title: "Do Work That Moves the Needle",
            text: "Work on high-value projects. Use modern tools and data to drive real growth. Your work shapes client outcomes and global impact."
        },
        {
            icon: "/icons/brilliant.png",
            title: "Join a Brilliant and Driven Peer Group",
            text: "Work with curious, capable minds from top institutions. Share ideas freely. Learn fast. Perform with purpose. We value character, potential, and a growth mindset."
        },
        {
            icon: "/icons/leaders.png",
            title: "Learn from Leaders, Grow with Mentors",
            text: "Get coaching, not just management. Our leaders help you navigate strategy, career growth, and everyday challenges with practical insights."
        },
        {
            icon: "/icons/career.png",
            title: "Accelerate Your Career with Purposeful Projects",
            text: "Grow through structured, meaningful projects tied to company OKRs. Expand your portfolio, build future-ready skills, and drive impact that matters."
        }
    ];

    return (
        <div className="bg-[#DCF5FF] lg:px-14 md:px-8 px-7 lg:py-8 md:py-6 py-6">
            <h2 className="lg:text-4xl text-2xl font-bold text-center 
                linear-text-gradient lg:mb-7 md:mb-6 mb-5" data-aos="zoom-in"
            >
                Working at Occams
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div data-aos="zoom-in" key={index}>
                        <div className="bg-white rounded-xl hover:shadow-md lg:p-6 flex sm:p-5 
                            md:p-5 transition transform hover:scale-105 duration-300 flex-col 
                            justify-between p-4 cursor-pointer md:min-h-[250px]"
                            style={{ boxShadow: '0px 10px 15px 0px #00000008' }}
                        >
                            <div className="flex flex-col gap-2">
                                <img src={item.icon} alt="icon" className="h-12 w-12" />

                                <h3 className="lg:text-lg md:text-lg sm:text-base text-sm font-medium 
                                    text-[#1E1E1E] mb-2"
                                >
                                    {item.title}
                                </h3>
                            </div>

                            <p className="lg:text-sm md:text-sm sm:text-sm text-xs text-[#626262]">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkAtOccams