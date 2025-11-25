import img from '../../assets/tenant.png'

const TenantSection = () => {
    return (
        <div className="mt-12 md:mt-16 lg:mt-20 px-4">
            <div className="flex justify-center">
                <button className="py-2 px-8 bg-[#2563EB1A] rounded-full text-sm md:text-base">
                    Performance
                </button>
            </div>

            <div className="max-w-3xl mx-auto">
                <h1 className="mt-4 text-xl sm:text-2xl lg:text-4xl text-center text-[#061251] font-medium leading-snug">
                    Strong <span className="italic">Tenant Record</span>
                </h1>

                <p className="text-[#061251] text-center mt-4 text-sm sm:text-base md:text-lg">
                    Your application, clear and compelling, in just <br /> a few minutes.
                </p>
            </div>

            <div className='mt-10'>
                <img src={img} alt="image" />
            </div>
        </div>
    )
}

export default TenantSection
