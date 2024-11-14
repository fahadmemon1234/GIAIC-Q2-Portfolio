import { FaTruck, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-[#161C28] relative text-gray-200 dark:text-gray-200">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="py-[30px] px-0 border-t border-slate-800">
              <div className="grid lg:grid-cols-4 md:grid-cols-2">
                <div className="flex items-center lg:justify-center">
                  <FaTruck className="align-middle text-lg mb-0 me-2 mdi mdi-truck-check-outline" />
                  <h6 className="mb-0 font-medium">Free delivery</h6>
                </div>
                <div className="flex items-center lg:justify-center">
                  <FaBoxArchive className="align-middle text-lg mb-0 me-2 mdi mdi-archive" />
                  <h6 className="mb-0 font-medium">Non-contact shipping</h6>
                </div>
                <div className="flex items-center lg:justify-center">
                  <FaMoneyBillWave className="align-middle text-lg mb-0 me-2 mdi mdi-cash-multiple" />
                  <h6 className="mb-0 font-medium">Money-back quarantee</h6>
                </div>
                <div className="flex items-center lg:justify-center">
                  <FaShieldAlt className="align-middle text-lg mb-0 me-2 mdi mdi-shield-check" />
                  <h6 className="mb-0 font-medium">Secure payments</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="grid md:grid-cols-2 items-center">
              <div className="md:text-start text-center">
                <p className="mb-0">
                  &copy; 2024 Cartzio. Crafted with passion for your perfect
                  shopping experience.
                </p>
              </div>

              <ul className="list-none md:text-end text-center mt-6 md:mt-0">
                <li className="inline ml-1">
                  <Image
                    src={"/assets/card/express.jpeg"}
                    className="max-h-6 rounded inline"
                    title="American Express"
                    alt="American Express"
                    width={39}
                    height={24}
                    quality={75}
                  />
                </li>
                <li className="inline ml-1">
                  <Image
                    src={"/assets/card/discover.jpeg"}
                    className="max-h-6 rounded inline"
                    title="Discover"
                    alt="Discover"
                    width={39}
                    height={24}
                    quality={75}
                  />
                </li>
                <li className="inline ml-1">
                  <Image
                    src={"/assets/card/master.jpeg"}
                    className="max-h-6 rounded inline"
                    title="master"
                    alt="master"
                    width={39}
                    height={24}
                    quality={75}
                  />
                </li>
                <li className="inline ml-1">
                  <Image
                    src={"/assets/card/paypal.jpeg"}
                    className="max-h-6 rounded inline"
                    title="paypal"
                    alt="paypal"
                    width={39}
                    height={24}
                    quality={75}
                  />
                </li>
                <li className="inline ml-1">
                  <Image
                    src={"/assets/card/visa.jpeg"}
                    className="max-h-6 rounded inline"
                    title="visa"
                    alt="visa"
                    width={39}
                    height={24}
                    quality={75}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
