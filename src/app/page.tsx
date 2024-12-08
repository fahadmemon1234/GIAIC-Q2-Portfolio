import Navbar1 from "./Component/Navbar/page";
import HeroSection from "./Component/Hero/page";
import Features1 from "./Component/Features/page";
import Features2 from "./Component/Features/Feature2";
import Listing1 from "./Component/Listings/page";
import Listing2 from "./Component/Listings/Listing2";
import Email from "./Component/Email/page";
import Footer1 from "./Component/Footer/page";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <HeroSection />
      <Features1 />
      <Listing1 />
      <Listing2 />
      <Email />
      <Features2 />
      <Footer1 />
    </>
  );
}
