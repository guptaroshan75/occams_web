import { Fragment, useState, useEffect, useRef } from "react";
import AboutUs from "./AboutUs";
import PeoplePriorities from "./PeoplePriorities";
import Resources from "./Resources";
import Awards from "./Awards";
import WorkAtOccams from "../components/WorkAtOccams";
import { GiShare } from "react-icons/gi";
import { GoBookmark } from "react-icons/go";
import Banner from "../components/Banner";

const tabs = [
    { label: "The HCMI North Star", id: "about" },
    { label: "Our people priorities", id: "priorities" },
    { label: "The occams edge", id: "resources" },
    { label: "Working at Occams", id: "working" },
];

const HomePage = () => {
    const [activeSection, setActiveSection] = useState(tabs[0].id);
    const [isSticky, setIsSticky] = useState(false);
    const observerTarget = useRef(null);
    const tabRefs = useRef({});
    // const scrollContainerRef = useRef(null);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        const offset = observerTarget.current?.offsetHeight || 0;
        if (section) {
            const y =
                section.getBoundingClientRect().top + window.scrollY - offset - 10;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const sectionIds = tabs.map((tab) => tab.id);

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 160;
            let currentSection = sectionIds[0];

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element && scrollPosition >= element.offsetTop) {
                    currentSection = id;
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            { root: null, threshold: 0 }
        );

        const current = observerTarget.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsSticky(!entry.isIntersecting);
    //         },
    //         { threshold: 0 }
    //     );

    //     const current = observerTarget.current;
    //     if (current) observer.observe(current);
    //     return () => current && observer.unobserve(current);
    // }, []);

    // Center the active tab

    useEffect(() => {
        const tabRef = tabRefs.current[activeSection];
        if (tabRef && typeof tabRef.scrollIntoView === "function") {
            tabRef.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [activeSection]);

    // useEffect(() => {
    //     const tabRef = tabRefs.current[activeSection];
    //     const container = scrollContainerRef.current;
    //     if (tabRef && container) {
    //         const tabLeft = tabRef.offsetLeft;
    //         const tabWidth = tabRef.offsetWidth;
    //         const containerWidth = container.offsetWidth;
    //         const scrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2;

    //         container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    //     }
    // }, [activeSection]);

    return (
        <Fragment>
            <Banner />

            <div ref={observerTarget} className="h-[1px]"></div>

            <div className={`w-full z-40 transition-all duration-200 ${isSticky ? `sticky lg:top-[5.2rem] md:top-[4.3rem] top-0 
                bg-white shadow-md` : ""}`}
            >
                <div className="lg:px-14 md:px-8 px-7 flex justify-between items-center border-b border-[#A6A6A6]">
                    <div className="flex overflow-x-auto no-scrollbar scroll-smooth gap-5 py-3 relative w-full"
                        data-aos="zoom-in-up"
                    >
                        {tabs.map((tab) => (
                            <button key={tab.id} ref={(el) => (tabRefs.current[tab.id] = el)} onClick={() => scrollToSection(tab.id)}
                                className={`relative text-sm md:text-base whitespace-nowrap transition-all duration-200 px-2 py-1 
                                    ${activeSection === tab.id ? "text-theme-2 font-semibold" : ""}`}
                            >
                                {tab.label}

                                {activeSection === tab.id && (
                                    <span className="absolute -bottom-3 left-0 right-0 h-[3px] bg-[#F36B21] rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4 text-lg ml-4 shrink-0">
                        <GiShare />
                        <GoBookmark />
                    </div>
                </div>
            </div>

            <div id="about">
                <AboutUs />
            </div>

            <div id="priorities">
                <PeoplePriorities />
            </div>

            <div id="resources">
                <Resources />
                <Awards />
            </div>

            <div id="working">
                <WorkAtOccams />
            </div>
        </Fragment>
    );
};

export default HomePage