import Hero from "./Component/Hero/page";
import Product from "./Component/Product/page";
import SaleBanner from "./Component/SaleBanner/page";
import FeatureProduct from "./Component/FeatureProduct/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <SaleBanner />
      <FeatureProduct />
    </>
  );
}
