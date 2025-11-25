import PartnersSection from "../../components/Home/PartnersSection";
import Directory from "../../components/Rental/Directory";
import HeroSection from "../../components/Rental/HeroSection";
import { Landlords } from "../../components/Rental/Landlords";
import PremiumPartner from "../../components/Rental/PremiumPartner";
import StatsSection from "../../components/Rental/StatsSection";
import Tenant from "../../components/Rental/Tenant";
import WhyDoUs from "../../components/Rental/WhyDoUs";

export const Rental = () => {
  return (
    <>
      <div
        className="pb-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(37, 99, 235, 0) 0%, rgba(37, 99, 235, 0.2) 50%, rgba(37, 99, 235, 0) 100%)",
        }}
      >
        <HeroSection />
        <StatsSection />
      </div>
      <WhyDoUs />
      <Tenant />
      <Landlords />
      <Directory />
      <PartnersSection />
      <PremiumPartner />
    </>
  );
};
