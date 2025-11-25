import React from 'react';
import icon1 from '../../assets/apart1.png';
import logo from '../../assets/main-logo.png';
import icon2 from '../../assets/apart2.png';
import icon3 from '../../assets/apart3.png';

const WorksSection: React.FC = () => {
    return (
       <div className='bg-[#EEF5FD] w-full'>
         <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Badge */}
                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#2563EB1A] rounded-full">
                        <span className="text-base">🔥</span>
                        <span className="text-sm text-[#061251]">
                            400 people found what they were looking for this week
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#1a1a4d] mb-4">
                    How does it <span className="italic font-serif">work</span>?
                </h1>

                {/* Subheading */}
                <p className="text-lg text-[#061251] mb-16 max-w-xl">
                    In 3 simple steps, find your apartment faster <br />than with a traditional agency
                </p>

                {/* Steps Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                    {/* Card 1 */}
                    <div className="rounded-3xl p-8 border border-[#06125133]">
                        <div className="mb-6">
                            <div className="w-full bg-white rounded-2xl pt-8 pb-10 flex flex-col justify-between h-full px-6">

                                {/* Top */}
                                <div className="w-30 h-5">
                                    <img src={logo} alt="logo" className="w-full" />
                                </div>

                                {/* Bottom */}
                                <div className="w-full mt-8 h-36 flex items-center justify-center">
                                    <img src={icon1} alt="image" className="w-full h-full object-contain" />
                                </div>

                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-[#1a1a4d] mb-4 text-center">
                            Create your file
                        </h3>

                        <p className="text-[#061251] leading-relaxed text-sm text-center">
                            Complete your tenant profile in 5 minutes. Add your documents, search criteria and budget.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-3xl p-8 border border-[#06125133]">
                        <div className="mb-6">
                            <div className="w-full bg-white rounded-2xl pt-8 pb-10 flex flex-col justify-between h-full px-6">

                                {/* Top */}
                                <div className="w-30 h-5">
                                    <img src={logo} alt="logo" className="w-full" />
                                </div>

                                {/* Bottom */}
                                <div className="w-full mt-8 h-36 flex items-center justify-center">
                                    <img src={icon2} alt="image" className="w-full h-full object-contain" />
                                </div>

                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-[#1a1a4d] mb-4 text-center">
                            Active double search
                        </h3>

                        <p className="text-[#061251] leading-relaxed text-sm text-center">
                            Apply to the listings that interest you AND enable notifications to receive direct offers from owners.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-3xl p-8 border border-[#06125133]">
                        <div className="mb-6">
                            <div className="w-full bg-white rounded-2xl pt-8 pb-10 flex flex-col justify-between h-full px-6">

                                {/* Top */}
                                <div className="w-30 h-5">
                                    <img src={logo} alt="logo" className="w-full" />
                                </div>

                                {/* Bottom (Left Aligned Icon ONLY FOR CARD 3) */}
                                <div className="w-full mt-8 h-36 flex items-center justify-start">
                                    <img src={icon3} alt="image" className="w-full h-full object-contain" />
                                </div>

                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-[#1a1a4d] mb-4 text-center">
                            Visit and sign
                        </h3>

                        <p className="text-[#061251] leading-relaxed text-sm text-center">
                            Arrange your visits directly with the owners. No intermediaries, no agency fees to pay.
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-3">
                    <button className="bg-[#1077FF] hover:bg-[#0b5ed7] text-white text-sm px-16 py-4 rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                        START NOW - IT'S FREE
                    </button>
                    <p className="text-sm text-[#061251]">
                        Free trial • Immediate access to listings
                    </p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default WorksSection;
