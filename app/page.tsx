import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import BrandStatement from '@/components/BrandStatement';
import Footer from '@/components/Footer';

const products = [
  {
    title: "The Contour Chair",
    description: "A masterclass in restraint. Carved from solid ash and finished with a subtle matte oil, it brings organic warmth to minimalist settings.",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200",
  },
  {
    title: "Linea Coffee Table",
    description: "Floating geometry. Travertine stone paired with darkened steel creates a sculptural presence that anchors the living space.",
    imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200",
  },
  {
    title: "Atmosphere Pendant",
    description: "Diffused light cast through unglazed ceramic. Each piece is hand-thrown, resulting in subtle variations that breathe life into the room.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
  }
];

export default function Home() {
  return (
    <main className="w-full relative bg-bg selection:bg-accent/30 selection:text-text-primary">
      <Hero />
      <div id="collection" className="relative z-10 w-full overflow-hidden">
        {products.map((product, index) => (
          <ProductSection 
            key={index}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <div id="about">
        <BrandStatement />
      </div>
      <Footer />
    </main>
  );
}
