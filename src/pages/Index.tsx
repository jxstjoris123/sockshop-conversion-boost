import Header from "@/components/Header";
import UspBar from "@/components/UspBar";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustSection from "@/components/TrustSection";
import B2BSection from "@/components/B2BSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <UspBar />
    <HeroSection />
    <Categories />
    <FeaturedProducts />
    <TrustSection />
    <B2BSection />
    <Newsletter />
    <Footer />
  </div>
);

export default Index;
