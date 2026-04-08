import Header from "@/components/Header";
import Footer from "@/components/Footer";
import B2BProductHero from "@/components/b2b/B2BProductHero";
import B2BPricingTable from "@/components/b2b/B2BPricingTable";
import B2BProductSpecs from "@/components/b2b/B2BProductSpecs";
import B2BOrderForm from "@/components/b2b/B2BOrderForm";
import B2BTrustBar from "@/components/b2b/B2BTrustBar";
import B2BRelatedProducts from "@/components/b2b/B2BRelatedProducts";
import B2BFAQ from "@/components/b2b/B2BFAQ";
import B2BTestimonials from "@/components/b2b/B2BTestimonials";

const B2BProductDetail = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <B2BTrustBar />
    <main className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <a href="/" className="hover:text-accent transition-colors">Home</a>
        <span className="mx-2">/</span>
        <a href="/#b2b" className="hover:text-accent transition-colors">Zakelijk</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-accent transition-colors">Wandelsokken</a>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Premium Merinowol Wandelsok Pro</span>
      </nav>

      <B2BProductHero />

      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2 space-y-10">
          <B2BPricingTable />
          <B2BProductSpecs />
          <B2BFAQ />
        </div>
        <div>
          <B2BOrderForm />
        </div>
      </div>

      <B2BTestimonials />
      <B2BRelatedProducts />
    </main>
    <Footer />
  </div>
);

export default B2BProductDetail;
