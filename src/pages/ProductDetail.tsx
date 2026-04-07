import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UspBar from "@/components/UspBar";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDetails from "@/components/product/ProductDetails";
import ProductReviews from "@/components/product/ProductReviews";
import RelatedProducts from "@/components/product/RelatedProducts";

const ProductDetail = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <UspBar />
    <main className="container mx-auto px-4 py-6 md:py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <a href="/" className="hover:text-accent transition-colors">Home</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-accent transition-colors">Wandelsokken</a>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Premium Merinowol Wandelsok Pro</span>
      </nav>

      {/* Hero: Gallery + Info */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <ProductGallery />
        <ProductInfo />
      </div>

      <ProductDetails />
      <ProductReviews />
      <RelatedProducts />
    </main>
    <Footer />
  </div>
);

export default ProductDetail;
