import { Navbar1 } from "./Component/Navbar/page";
import HeroSection from "./Component/Hero/page";
import { Features1, Features2 } from "./Component/Features/page";
import { Listing1, Listing2 } from "./Component/Listings/page";
import Email from "./Component/Email/page";
import Footer from "./Component/Footer/page";

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
      <Footer />
    </>
  );
}
