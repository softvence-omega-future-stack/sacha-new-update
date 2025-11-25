import { ChevronDown, MapPin } from "lucide-react";
import bgImg from '../../assets/hero-background.png'

const HeroSection: React.FC = () => {

  return (
    <div className=" max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] overflow-hidden border-blue-600 rounded-2xl">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-linear-to-r to-transparent">
          {/* Building Image */}
          <div className="absolute inset-0">
            <img
              src={bgImg}
              alt="Modern architecture building"
              className="w-full h-full object-cover mix-blend-overlay opacity-90"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-[1400px] mx-auto  px-8 sm:px-10 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-6">
                Find your <span className="italic font-light">Apartment Quickly</span>
                <br />
                and without agency fees
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-8 max-w-lg">
                Apply to listings and receive direct offers from owners · <span className="font-semibold">€0 agency fees</span>, 100% between individuals.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-4 bg-white text-[#1077FF] rounded-xl font-semibold text-[15px] hover:bg-white/95 transition-colors">
                  OUR APARTMENTS
                </button>
                <button className="px-6 py-4 border border-white text-white rounded-xl font-semibold text-[15px] hover:bg-white/10 transition-colors">
                  I AM THE OWNER
                </button>
              </div>
            </div>

            {/* Right Content - Search Form */}
            <div className="lg:ml-auto w-full max-w-md -mt-8">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <h3 className="text-gray-900 font-bold text-xl mb-6">Find Your Next Home</h3>

                {/* Property Type */}
                <div className="mb-4">
                  <div className="bg-[#EEF5FD] px-2 py-3 rounded-2xl">
                    <label className="block text-gray-700 text-sm font-semibold mb-2 pl-4">
                      Property Type
                    </label>

                    <div className="relative">
                      <select className="w-full px-4 border-none rounded-lg appearance-none bg-[#EEF5FD] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1077FF] py-1">
                        <option>Select type</option>
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Studio</option>
                      </select>

                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* Location */}

                <div className="mb-4">
                  <div className="bg-[#EEF5FD] px-2 py-3 rounded-2xl">
                    <label className="block text-gray-700 text-sm font-semibold mb-2 pl-4">
                      Location
                    </label>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Dhanmondi, Dhaka"
                        className="w-full px-4 py-1 border-none rounded-xl bg-[#EEF5FD] text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1077FF]"
                      />

                      <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1077FF]" />
                    </div>
                  </div>
                </div>


                {/* Price Range */}
                <div className="mb-4">
                  <div className="bg-[#EEF5FD] px-2 py-3 rounded-2xl">
                    <label className="block text-gray-700 text-sm font-semibold mb-2 pl-4">
                      Price Range
                    </label>

                    <div className="relative">
                      <select className="w-full px-4 border-none rounded-lg appearance-none bg-[#EEF5FD] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1077FF] py-1">
                        <option>$10,000 - $20,000</option>
                        <option>$20,000 - $30,000</option>
                        <option>$30,000 - $40,000</option>
                        <option>$40,000 - $50,000</option>
                      </select>

                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* Search Button */}
                <button className="w-full py-3.5 bg-[#1077FF] text-white rounded-xl font-medium text-[15px] hover:bg-[#0d63db] transition-colors">
                  SEARCH NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;