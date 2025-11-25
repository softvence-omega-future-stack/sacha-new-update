import { CircleUser, Globe, Menu, User, X } from 'lucide-react';
import React, { useState } from 'react';
import logo from '../../assets/main-logo.png'

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="bg-white border-gray-200">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                   <img src={logo} alt="" />

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <a
                            href="/pages/apartments"
                            className="text-[#061251] hover:text-gray-900 text-base font-medium transition-colors"
                        >
                            Our apartments
                        </a>
                        <a
                            href="/pages/rental"
                            className="text-[#061251] hover:text-gray-900 text-base font-medium transition-colors"
                        >
                            Rental management
                        </a>
                        <a
                            href="#"
                            className="text-[#061251] hover:text-gray-900 text-base font-medium transition-colors"
                        >
                            Premium
                        </a>
                        <a
                            href="#"
                            className="text-[#061251] hover:text-gray-900 text-base font-medium transition-colors"
                        >
                            FAQ
                        </a>
                    </nav>

                    {/* Desktop Right Side */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="flex items-center gap-2 text-[#061251] hover:text-gray-900 text-base font-medium transition-colors">
                            <Globe className="w-5 h-5" />
                            <span>English</span>
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 border border-[#061251] rounded-xl text-[#061251] hover:bg-gray-50 text-base font-medium transition-colors">
                            <CircleUser className="w-5 h-5" />
                            <span>login / Register</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            <a
                                href="/pages/apartments"
                                className="text-[#061251] hover:text-gray-900 text-[15px] font-medium py-2 transition-colors"
                            >
                                Our apartments
                            </a>
                            <a
                                href="/pages/rental"
                                className="text-[#061251] hover:text-gray-900 text-[15px] font-medium py-2 transition-colors"
                            >
                                Rental management
                            </a>
                            <a
                                href="#"
                                className="text-[#061251] hover:text-gray-900 text-[15px] font-medium py-2 transition-colors"
                            >
                                Premium
                            </a>
                            <a
                                href="#"
                                className="text-[#061251] hover:text-gray-900 text-[15px] font-medium py-2 transition-colors"
                            >
                                FAQ
                            </a>
                            <div className="pt-4 border-t border-gray-200 space-y-3">
                                <button className="flex items-center gap-2 text-[#061251] hover:text-gray-900 text-[15px] font-medium py-2 transition-colors">
                                    <Globe className="w-5 h-5" />
                                    <span>English</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 w-full px-5 py-2.5 border border-[#061251] rounded-xl text-[#061251] hover:bg-gray-50 text-[15px] font-medium transition-colors">
                                    <User className="w-4 h-4" />
                                    <span>login / Register</span>
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;