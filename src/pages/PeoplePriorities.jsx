const PeoplePriorities = () => {

    return (
        <div className="bg-[#F7F7F7] lg:px-14 md:px-8 px-7 lg:py-14 md:py-10 py-8">
            <div className="text-center max-w-3xl mx-auto mb-10" data-aos="zoom-in">
                <h2 className="lg:text-4xl text-2xl font-bold linear-text-gradient">
                    Our People Priorities
                </h2>

                <p className="lg:text-xl md:text-lg text-base mt-2 text-gray-600">
                    Here’s what we focus on to make Occams a place where people thrive
                </p>
            </div>

            <section className="hidden lg:grid grid-cols-4 gap-6">
                <div className="space-y-4" data-aos="zoom-in">
                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/purpose.png" alt="Purpose"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="lg:text-[28px] md:text-xl sm:text-lg text-sm font-semibold">
                                Purpose
                            </h2>

                            <p className="lg:text-base md:text-base sm:text-base text-xs mt-1">
                                Everyone should know why their work matters — to themselves,
                                their team, and our business.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <img src="/assets/clear_focus.png" alt="Clear Focus"
                            className="object-cover w-full h-full rounded-2xl"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <h2 className="lg:text-[28px] md:text-xl sm:text-lg text-sm font-semibold">
                            Clear Focus
                        </h2>

                        <p className="lg:text-lg md:text-lg sm:text-base text-xs mt-2">
                            We make sure people understand what’s most important and how
                            they can contribute.
                        </p>
                    </div>
                </div>

                <div className="space-y-4" data-aos="zoom-in">
                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/lean_structure.png" alt="Lean Structure"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="lg:text-[28px] md:text-xl sm:text-lg text-sm font-semibold">
                                Lean Structure
                            </h2>

                            <p className="lg:text-base md:text-base sm:text-base text-xs mt-1">
                                No layers for the sake of it. We keep things flat, efficient, & agile.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/smart_decisions.png" alt="Smart Decisions"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="lg:text-[28px] md:text-xl sm:text-lg text-sm font-semibold">
                                Quick, Smart Decisions
                            </h2>

                            <p className="lg:text-base md:text-base sm:text-base text-xs mt-1">
                                We act with a bias for action. We base decisions on data and facts,
                                not just opinions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4" data-aos="zoom-in">
                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/always_learning.png" alt="Always Learning"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="lg:text-[28px] md:text-xl sm:text-lg text-sm font-semibold">
                                Always Learning
                            </h2>

                            <p className="lg:text-base md:text-base sm:text-base text-xs mt-1">
                                Continuous learning is our default mode. We learn by doing, sharing,
                                and improving continuously.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <img src="/assets/talent.png" alt="Talent"
                            className="object-cover w-full h-full rounded-2xl"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <h2 className="lg:text-[28px] md:text-xl sm:text-lg text-sm font-semibold">
                            Talent Is Everything
                        </h2>

                        <p className="lg:text-lg md:text-lg sm:text-base text-xs mt-2">
                            We invest in people, especially in the roles that matter most
                            to our success.
                        </p>
                    </div>
                </div>

                <div className="space-y-4" data-aos="zoom-in">
                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/culture_that.png" alt="Culture That Matters"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="lg:text-[28px] md:text-xl sm:text-lg text-sm font-semibold">
                                Culture That Matters
                            </h2>

                            <p className="lg:text-base md:text-base sm:text-base text-xs mt-1">
                                We move quickly, focus on value creation, keep our people  at the
                                center, and treat each other with respect and appreciation.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <h2 className="lg:text-[28px] md:text-xl sm:text-lg text-sm font-semibold">
                            Connected Thinking
                        </h2>

                        <p className="lg:text-lg md:text-lg sm:text-base text-xs mt-2">
                            We build partnerships across teams, functions, and ecosystems to
                            help everyone succeed.
                        </p>
                    </div>

                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/technology.png" alt="Technology With Purpose"
                            className="object-cover w-full h-full"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="lg:text-[28px] md:text-xl sm:text-lg text-sm font-semibold">
                                Technology with Purpose
                            </h2>

                            <p className="lg:text-base md:text-base sm:text-base text-xs mt-1">
                                We treat data as a core business asset — it guides our decisions,
                                our growth, and our innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-2 lg:hidden gap-6 mt-10">
                <div className="space-y-4" data-aos="zoom-in">
                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/purpose.png" alt="Purpose"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="md:text-xl sm:text-lg text-sm font-semibold">
                                Purpose
                            </h2>

                            <p className="md:text-base sm:text-base text-xs mt-1">
                                Everyone should know why their work matters — to themselves,
                                their team, and our business.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <img src="/assets/clear_focus.png" alt="Clear Focus"
                            className="object-cover w-full h-full rounded-2xl"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <h2 className="md:text-xl sm:text-lg text-sm font-semibold">
                            Clear Focus
                        </h2>

                        <p className="md:text-lg sm:text-base text-xs mt-2">
                            We make sure people understand what’s most important and how
                            they can contribute.
                        </p>
                    </div>

                    <div className="overflow-hidden">
                        <img src="/assets/talent.png" alt="Talent"
                            className="object-cover w-full h-full rounded-2xl"
                        />
                    </div>

                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/exciting_moments.png" alt="Exciting Moments"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="md:text-xl sm:text-lg text-sm font-semibold">
                                Culture That Matters
                            </h2>

                            <p className="md:text-base sm:text-base text-xs mt-1">
                                We move quickly, focus on value creation, keep our people  at the
                                center, and treat each other with respect and appreciation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4" data-aos="zoom-in">
                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/lean_structure.png" alt="Lean Structure"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="md:text-xl sm:text-lg text-sm font-semibold">
                                Lean Structure
                            </h2>

                            <p className="md:text-base sm:text-base text-xs mt-1">
                                No layers for the sake of it. We keep things flat, efficient, & agile.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/smart_decisions.png" alt="Smart Decisions"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="md:text-xl sm:text-lg text-sm font-semibold">
                                Quick, Smart Decisions
                            </h2>

                            <p className="md:text-base sm:text-base text-xs mt-1">
                                We act with a bias for action. We base decisions on data and facts,
                                not just opinions.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/young_collage.png" alt="Smart Decisions"
                            className="object-cover w-full h-full rounded-2xl"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="md:text-xl sm:text-lg text-sm font-semibold">
                                Always Learning
                            </h2>

                            <p className="md:text-base sm:text-base text-xs mt-1">
                                Continuous learning is our default mode. We learn by doing, sharing,
                                and improving continuously.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <h2 className="md:text-xl sm:text-lg text-sm font-semibold">
                            Connected Thinking
                        </h2>

                        <p className="md:text-lg sm:text-base text-xs mt-2">
                            We build partnerships across teams, functions, and ecosystems to
                            help everyone succeed.
                        </p>
                    </div>

                    <div className="relative overflow-hidden text-white">
                        <img src="/assets/technology.png" alt="Technology With Purpose"
                            className="object-cover w-full h-full"
                        />

                        <div className="absolute bottom-0 flex flex-col justify-end p-4">
                            <h2 className="md:text-xl sm:text-lg text-sm font-semibold">
                                Technology with Purpose
                            </h2>

                            <p className="md:text-base sm:text-base text-xs mt-1">
                                We treat data as a core business asset — it guides our decisions,
                                our growth, and our innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PeoplePriorities