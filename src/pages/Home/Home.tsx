import HeroSection from '../../components/Home/HeroSection'
import StatsSection from '../../components/Home/StatsSection'
import FranceApartments from '../../components/Home/FranceApartments'
import WhyUsSection from '../../components/Home/WhyUsSection'
import TenantSection from '../../components/Home/TenantSection'
import SuccessPillars from '../../components/Home/SuccessPillars'
import PartnersSection from '../../components/Home/PartnersSection'
import WorksSection from '../../components/Home/WorksSection'
import FeaturedApartments from '../../components/Home/FeaturedSection'
import HeroFeaturesSection from '../../components/Home/HeroFeaturesSection'
import StrongTenantSection from '../../components/Home/StrongTenantSection'
import TrustpilotTestimonials from '../../components/Home/testimonialsSection'

const Home = () => {
  return (
    <>
      <div className='pb-16'
        style={{
          background: "linear-gradient(180deg, rgba(37, 99, 235, 0) 0%, rgba(37, 99, 235, 0.2) 50%, rgba(37, 99, 235, 0) 100%)"
        }}
      >
        <HeroSection />
        <StatsSection />
      </div>

      <FranceApartments/>
      <WhyUsSection/>
      <TenantSection/>
      <SuccessPillars/>
      <PartnersSection/>
      <WorksSection/>
      <FeaturedApartments/>
      <HeroFeaturesSection/>
      <StrongTenantSection/>
      <TrustpilotTestimonials/>

    </>
  )
}

export default Home