import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartSidebar from '@/components/CartSidebar';
import Footer from '@/components/Footer';
import FloralDivider from '@/components/decorative/FloralDivider';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        
        {/* Featured Products - Limited */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="section-title text-foreground mb-4">
              Produk Unggulan
            </h2>
            <FloralDivider className="mb-8" />
            <ProductGrid showFilters={false} />
            
            <div className="text-center mt-12">
              <Link to="/shop" className="vintage-button">
                Lihat Semua Koleksi
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-6 bg-card border-y border-border">
          <div className="container mx-auto">
            <h2 className="section-title text-foreground mb-12">
              Kategori
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Hoodie', category: 'hoodie', desc: 'Nyaman dan hangat untuk sehari-hari' },
                { name: 'T-Shirt', category: 'tshirt', desc: 'Klasik dan versatile untuk berbagai gaya' },
                { name: 'Jacket', category: 'jacket', desc: 'Elegan untuk tampilan yang sophisticated' },
              ].map((cat) => (
                <Link
                  key={cat.category}
                  to={`/shop?category=${cat.category}`}
                  className="group p-8 border border-border hover:border-primary transition-all text-center"
                >
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">{cat.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="section-title text-foreground mb-6">
              Tentang THEKEWEZ
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              THEKEWEZ lahir dari kecintaan terhadap estetika vintage dan keindahan desain klasik yang tak lekang oleh waktu. 
              Kami percaya bahwa pakaian bukan sekadar penutup tubuh, melainkan cerminan karakter dan gaya hidup.
            </p>
            <Link to="/about" className="vintage-button">
              Selengkapnya
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Index;
