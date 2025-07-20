import { Fragment, useState, useEffect, useRef } from 'react';
import Banner from '../Components/Banner';
import AboutUs from './AboutUs';
import PeoplePriorities from './PeoplePriorities';
import Resources from './Resources';
import Awards from './Awards';
import WorkAtOccams from '../components/WorkAtOccams';
import { GiShare } from 'react-icons/gi';
import { GoBookmark } from 'react-icons/go';

const tabs = [
    { label: 'The HCMI North Star', id: 'about' },
    { label: 'Our people priorities', id: 'priorities' },
    { label: 'The occams edge', id: 'resources' },
    { label: 'Working at Occams', id: 'working' },
];

const HomePage = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [isTabBarSticky, setIsTabBarSticky] = useState(false);
    const tabBarRef = useRef(null);
    const tabBarOffsetRef = useRef(null);
    const navbarHeight = 80;
    const tabBarHeight = 50;

    useEffect(() => {
        const observers = tabs.map(tab => {
            const el = document.getElementById(tab.id);
            if (!el) return null;

            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setActiveTab(tab.id);
                        }
                    })
                },
                {
                    rootMargin: `-${navbarHeight + tabBarHeight + 10}px 0px 0px 0px`,
                    threshold: 0,
                }
            );

            observer.observe(el);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    useEffect(() => {
        const measureOffset = () => {
            if (tabBarRef.current) {
                tabBarOffsetRef.current = tabBarRef.current.offsetTop;
            }
        };

        measureOffset();
        window.addEventListener('resize', measureOffset);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const stickyOffset = tabBarOffsetRef.current || 0;
            setIsTabBarSticky(scrollY >= stickyOffset - navbarHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', measureOffset);
        };
    }, []);

    useEffect(() => {
        const activeBtn = document.querySelector(`[data-tab-id='${activeTab}']`);
        if (activeBtn) {
            activeBtn.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    }, [activeTab]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        const yOffset = -(navbarHeight + tabBarHeight - 10);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <Fragment>
            <Banner />

            <div ref={tabBarRef} className={`w-full transition-all duration-200 ${isTabBarSticky ?
                'fixed top-0 md:top-[80px] z-40 bg-white shadow-md border-b border-[#A6A6A6]' : ''}`}
            >
                <div className="w-full bg-white border-b border-[#A6A6A6]">
                    <div className="mx-auto lg:px-14 md:px-8 px-7 flex justify-between">
                        <div className="flex overflow-x-auto whitespace-nowrap gap-5 py-3 
                            scroll-smooth no-scrollbar" data-aos="zoom-in-up"
                        >
                            {tabs.map((tab, index) => (
                                <button key={index} data-tab-id={tab.id} onClick={() => scrollTo(tab.id)}
                                    className={`relative text-sm md:text-base py-1 cursor-pointer 
                                        ${activeTab === tab.id ? 'font-semibold text-black' : ''}`}
                                >
                                    {tab.label}

                                    {activeTab === tab.id && (
                                        <span className="absolute left-0 -bottom-3 w-full h-1 
                                            rounded-full bg-[#F36B21]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-4 text-lg">
                            <GiShare />
                            <GoBookmark />
                        </div>
                    </div>
                </div>
            </div>

            {isTabBarSticky && <div style={{ height: `${tabBarHeight}px` }} />}

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