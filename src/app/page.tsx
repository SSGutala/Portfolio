import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HomeSection from '@/components/sections/home';
import ConsultingSection from '@/components/sections/consulting';
import VenturesSection from '@/components/sections/ventures';
import ProductSection from '@/components/sections/product';
import UiUxSection from '@/components/sections/ui-ux';
import AboutSection from '@/components/sections/about';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <HomeSection />
        <VenturesSection />
        <ConsultingSection />
        <ProductSection />
        <UiUxSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
