import { Navbar1 } from "./Component/Navbar/page";
import HeroSection from "./Component/Hero/page";
import { Features1, Features2 } from "./Component/Features/page";
import { Listing1, Listing2 } from "./Component/Listings/page";
import Email from "./Component/Email/page";
import { Footer1 } from "./Component/Footer/page";
import ProductListing from "./Component/ProductListing/page";

export default function Home() {
  return (
    <>
      <ProductListing />
      {/* <Navbar1 />
      <HeroSection />
      <Features1 />
      <Listing1 />
      <Listing2 />
      <Email />
      <Features2 />
      <Footer1 /> */}
    </>
  );
}
