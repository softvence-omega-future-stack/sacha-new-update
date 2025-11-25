import bgImg from '../../assets/rental/bg-image.png'

const HeroSection: React.FC = () => {

  return (
    <div className="px-8">
      {/* Hero Section */}
      <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] overflow-hidden border-blue-600 rounded-2xl">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-linear-to-r to-transparent">
          {/* Building Image */}
          <div className="absolute inset-0">
            <img
              src={bgImg}
              alt="Modern architecture building"
              className="w-full h-full fit"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative  mx-auto  px-8 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-24 pb-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-6">
                Your Property <br /> <span className="italic font-light">Management</span>
                <br />
                <span className="italic font-light"> 100% Free</span>
              
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-8 max-w-lg">
               Access a directory of pre-qualified candidates, view their complete files and securely select the ideal tenant.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-4 uppercase bg-white text-[#1077FF] rounded-xl font-semibold text-[15px] hover:bg-white/95 transition-colors">
                  Post an add 
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