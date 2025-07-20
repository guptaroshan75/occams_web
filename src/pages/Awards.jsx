const Awards = () => {
    const awards = [
        {
            img: "/assets/work_place.svg",
            text: "Recognizing our inclusive, growth-oriented environment"
        },
        {
            img: "/assets/sales_excellence.svg",
            text: "Award for Sales & Customer Service Excellence (2025), a testament to our team's dedication and client-first mindset"
        },
        {
            img: "/assets/gra_award.svg",
            text: "Named on the Fortune MostInnovative Companies (2023) & Inc. 5000, & ranked #159 on the FT’s Americas Fastest-Growing Companies"
        },
        {
            img: "/assets/fortune_award.png",
            text: "2024 Global Recognition Award, celebrating our sustained excellence on a global scale"
        }
    ];

    return (
        <div className="bg-[#FFF5EF] lg:px-14 md:px-8 px-7 lg:py-8 md:py-6 py-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {awards.map((award, index) => (
                    <div className="flex flex-col items-center" key={index} data-aos="zoom-in">
                        <div className="bg-white rounded-lg shadow p-3.5 w-full mb-5
                            flex items-center justify-center h-32 border border-[#D3D3D3]"
                        >
                            <img src={award.img} alt={`award-${index}`}
                                className="h-16 object-contain"
                            />
                        </div>

                        <p className="lg:text-[15px] md:text-sm text-sm text-black">
                            {award.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards