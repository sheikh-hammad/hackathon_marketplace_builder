import SponsersLogos from "./components/ui/SponsersLogos";
import FeaturedProducts from "./components/ui/FeaturedProducts";
import OurProducts from "./components/ui/OurProducts";
import ExplorePopular from "./components/ui/ExplorePopular";
import TopCategories from "./components/ui/TopCategories";
import Hero from "./components/ui/Hero";
export default function Home() {
  return (
    <>
      <div>
        <Hero/>
        <SponsersLogos />
        <FeaturedProducts />
        <TopCategories/>
        <ExplorePopular />
        <OurProducts />
      </div>
      {/* </div> */}
    </>
  );
}
