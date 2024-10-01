import Navbar from "./components/navbar";
import FeaturedCard from "./components/FeaturedCard";
import LogoAmount from "./components/LogoAmount";
import FeaturedItem from "./components/FeaturedItem";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FeaturedCard />
      <LogoAmount />
      <FeaturedItem />
      <Testimonials />
      <Footer />
    </>
  );
}
