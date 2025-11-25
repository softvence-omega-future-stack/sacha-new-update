import React from 'react';
import { Rocket} from 'lucide-react';
import img from '../../assets/strong-tenant.png'

const StrongTenantSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e8ecf4] text-[#1a1a4d] rounded-full text-sm font-medium">
                <Rocket className="w-4 h-4" />
                Performance
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#1a1a4d] mb-4">
              Strong Tenant <span className="italic font-normal">Record</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-[#1a1a4d] mb-6 leading-relaxed">
              Your application, clear and compelling, in just <br /> a few minutes.
            </p>

            {/* CTA Button */}
            <button className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white text-base px-22 py-3.5 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
              CREATE MY FOLDER
            </button>
          </div>

          {/* Right Column - Cards */}
          <div className="relative">
            <div className="relative p-8 space-y-6">
             <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrongTenantSection;