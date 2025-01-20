"use client";
import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { fetchAllCartData, deleteCartItem } from "@/app/lib/api";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { toast, Slide } from "react-toastify";

interface ImageAsset {
  _id: string;
  url: string;
}

// Interface for product dimensions
interface ProductDimensions {
  width?: number;
  height?: number;
  depth?: number;
  _type: string;
}

// Interface for product details in the product table
interface ProductDetails {
  name?: string;
  description?: string;
  features?: string[];
  dimensions?: ProductDimensions;
  image?: ImageAsset;
}

// Interface for a single cart item (addToCart table)
interface CartItem {
  _id: string;
  _type: string;
  productId: string;
  productName: string;
  productImage?: {
    asset: ImageAsset;
  };
  price: number;
  quantity: number;
  productImageFromProductTable?: ImageAsset;
  // Optional: To include product details like name, description, etc., from the related product table
  productDetails?: ProductDetails;
}

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isCartOpen) return; // Exit if the cart is not open

    const fetchCartData = async () => {
      try {
        const data = await fetchAllCartData();
        // const grandTotal = await fetchCartDataWithTotal();

        const grandTotal = data.reduce(
          (sum, item) => sum + item.quantity * item.price,
          0
        );

        setProductList(data); // Update the cart data
        setTotal(grandTotal);
      } catch (error) {
        console.log("Error fetching cart data:", error);
      }
    };

    fetchCartData(); // Call the function when the cart opens
  }, [isCartOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [productList, setProductList] = useState<CartItem[]>([]);
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        debugger;
        const data = await fetchAllCartData(); // Fetch data

        // setProductList(data); // Update product list
        setDataCount(data.length); // Update data count
        clearInterval(intervalId); // Stop interval after fetching the data once
      } catch (error) {
        console.log("Error fetching cart data:", error);
        clearInterval(intervalId); // Stop interval in case of error
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDelete = async (id: string) => {
    try {
      // Delete the cart item document from Sanity
      debugger;
      await deleteCartItem(id);

      // Update the state to reflect the changes
      setProductList((prevProductList) => {
        // Filter out the deleted item
        const updatedList = prevProductList.filter((item) => item._id !== id);

        // Recalculate the total
        const updatedTotal = updatedList.reduce(
          (sum, item) => sum + item.quantity * item.price,
          0
        );
        setTotal(updatedTotal); // Update total

        toast.success("Item removed from cart", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });

        return updatedList; // Update product list
      });
    } catch (error) {
      console.log("Error deleting cart item:", error);
      alert("Failed to remove item from cart");
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set to `true` if scrolled
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <header
        id="sticky-header"
        className={`fixed inset-x-0 top-0 w-full z-20 transition-all ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="px-4 md:px-10 2xl:px-24 py-6 lg:py-0">
          <div className="flex items-center lg:relative">
            <div className="w-6/12 lg:w-2/12">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={"/assets/images/logo/logo.webp"}
                    alt="logo"
                    loading="lazy"
                    width={125}
                    height={45}
                    quality={80}
                  />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 xl:relative">
              <nav className="main-menu">
                <ul className="flex flex-wrap">
                  <li className="main-menu__item relative group">
                    <Link
                      className="block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="main-menu__item group">
                    <Link
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                      href="/Component/Shop"
                    >
                      Shop
                    </Link>
                  </li>

                  <li className="main-menu__item group">
                    <Link
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                      href="/Component/OrderTracking"
                    >
                      Tracking Order
                    </Link>
                  </li>

                  <li className="main-menu__item">
                    <Link
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                      href="/Component/Contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="w-6/12 lg:w-3/12">
              <ul className="flex items-center justify-end">
                <li className="ml-6 cursor-pointer">
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleCart();
                    }}
                    className="text-primary text-md hover:text-orange transition-all relative offcanvas-toggle"
                  >
                    <span className="w-5 h-5 bg-dark text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none">
                      {dataCount}
                    </span>
                    <MdOutlineShoppingBag size={25} />
                  </Link>
                </li>
                <li className="ml-6 cursor-pointer">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </li>

                <li className="ml-6 lg:hidden cursor-pointer">
                  <Link
                    href="#"
                    onClick={toggleMenu}
                    className="offcanvas-toggle text-primary text-md hover:text-orange transition-all"
                  >
                    <IoIosMenu />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- offcanvas-overlay start --> */}
      <div
        className={`offcanvas-overlay fixed inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out ${
          isCartOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleCart}
      ></div>

      <div
        className={`offcanvas-overlay fixed inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu} // Close the menu when clicking on the overlay
      ></div>
      {/* <!-- offcanvas-overlay end --> */}

      {/* <!-- offcanvas-mobile-menu start --> */}
      <div
        id="offcanvas-mobile-menu"
        className={`offcanvas left-auto right-0 fixed font-normal text-sm top-0 z-50 h-screen w-72 sm:w-80 lg:w-96 transition-transform duration-300 ease-in-out bg-white ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-8 py-12 h-5/6 overflow-y-auto">
          {/* <!-- search form start --> */}

          <form
            className="pb-10 mb-10 border-b border-solid border-gray-600"
            action="#"
            method="get"
          >
            <div className="relative">
              <div className="logo m-auto flex">
                <Link href="/">
                  <Image
                    src={"/assets/images/logo/logo.webp"}
                    alt="logo"
                    loading="lazy"
                    width={150}
                    height={45}
                    quality={80}
                  />
                </Link>
              </div>
            </div>
          </form>

          {/* <!-- search form end --> */}

          {/* <!-- close button start --> */}
          <button
            className={`offcanvas-close bg-dark group transition-all hover:text-orange text-white w-10 h-10 flex items-center justify-center absolute -left-10 top-0 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            aria-label="offcanvas"
            onClick={closeMenu} // Close the menu on button click
            style={{
              transition:
                "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
              transform: isMenuOpen ? "rotate(0deg)" : "rotate(90deg)",
            }}
          >
            <IoClose
              className="transition-all transform group-hover:rotate-90"
              size={20}
            />
          </button>
          {/* <!-- close button end --> */}

          {/* <!-- offcanvas-menu start --> */}

          <nav className="offcanvas-menu pb-10 mb-10 border-solid border-gray-600">
            <ul>
              <li className="relative block">
                <Link
                  href="/"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Home
                </Link>
              </li>
              <li className="relative block">
                <Link
                  href="/Component/Shop"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Shop
                </Link>
              </li>

              <li className="relative block">
                <Link
                  href="/Component/OrderTracking"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Tracking Order
                </Link>
              </li>

              <li className="relative block">
                <Link
                  href="/Component/Contact"
                  className="relative block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          {/* <!-- offcanvas-menu end --> */}
        </div>
      </div>
      {/* <!-- offcanvas-mobile-menu end --> */}

      {/* <!-- offcanvas-mobile-menu start --> */}
      <div
        id="offcanvas-cart"
        className={`offcanvas right-0 fixed font-normal text-sm top-0 z-50 h-screen w-80 lg:w-96 bg-white overflow-y-auto transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8">
          <div className="flex flex-wrap justify-between items-center pb-6 mb-6 border-b border-solid border-gray-600">
            <h4 className="font-normal text-md text-dark capitalize">
              Shoping Cart
            </h4>
            <button
              className="offcanvas-close hover:text-orange"
              aria-label="close icon"
              onClick={toggleCart}
            >
              <IoClose size={20} />
            </button>
          </div>
          <ul className="h-96 overflow-y-auto">
            {productList.map((product) => (
              <li className="flex flex-wrap group mb-8" key={product._id}>
                <div className="mr-5 relative">
                  <Link href="#">
                    <Image
                      src={product.productImageFromProductTable?.url || ""}
                      alt={product.productName}
                      loading="lazy"
                      width={90}
                      height={100}
                      quality={50}
                    />
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange"
                  >
                    <IoClose size={20} />
                  </button>
                </div>
                <div className="flex-1">
                  <h4>
                    <Link
                      className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide"
                      href="#"
                    >
                      {product.productName}
                    </Link>
                  </h4>
                  <span className="font-light text-sm text-dark transition-all tracking-wide">
                    {product.quantity} x <span>${product.price}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <div className="flex flex-wrap justify-between items-center py-4 my-6 border-t border-b border-solid border-gray-600 font-normal text-base text-dark capitalize">
              Total:<span>${total}</span>
            </div>
            <div className="text-center">
              <Link
                className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none"
                href="/Component/Checkout"
              >
                Checkout
              </Link>
              <Link
                className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none mt-3"
                href="/Component/Cart"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- offcanvas-mobile-menu end --> */}
    </>
  );
};

export default Navbar;
