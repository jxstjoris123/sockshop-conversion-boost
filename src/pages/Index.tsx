import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UspBar from "@/components/UspBar";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustSection from "@/components/TrustSection";
import B2BSection from "@/components/B2BSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <UspBar />
    <Categories />
    <FeaturedProducts />
    <TrustSection />
    <B2BSection />
    <Newsletter />
    <Footer />
    <MobileStickyBar />
  </div>
);

export default Index;
