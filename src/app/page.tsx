import { Navbar1 } from "./Component/Navbar/page";
import HeroSection from "./Component/Hero/page";
import Features from "./Component/Features/page";
import { Listing1, Listing2 } from "./Component/Listings/page";
import Email from "./Component/Email/page";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <HeroSection />
      <Features />
      <Listing1 />
      <Listing2 />
      <Email />
    </>
  );
}
