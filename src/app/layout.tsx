import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';
import "tippy.js/dist/tippy.css";

import "./toastify.css";
import { ToastContainer } from "react-toastify";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sinp Ecommerce-Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Favicon --> */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/images/logo/logo.webp"
        />

        {/* <!-- Font CSS --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Vendor CSS (Bootstrap & Icon Font) --> */}

        {/* <!-- Plugins CSS (All Plugins Files) --> */}

        <link
          rel="stylesheet"
          href="/assets/css/plugins/swiper-bundle.min.css"
        />

        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />

        {/* <!-- Style CSS --> */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <ToastContainer/>
        <ClerkProvider>{children}</ClerkProvider>

        {/* <!-- JS Vendor, Plugins & Activation Script Files --> */}

        {/* <!-- Vendors JS --> */}
        <Script src="/assets/js/vendor/modernizr-3.11.7.min.js"></Script>
        <Script src="/assets/js/vendor/jquery-3.6.0.min.js"></Script>
        <Script src="/assets/js/vendor/jquery-migrate-3.3.2.min.js"></Script>
        {/* <!-- Plugins JS --> */}
        <Script src="/assets/js/plugins/swiper-bundle.min.js"></Script>
        <Script src="/assets/js/plugins/popper.min.js"></Script>
        <Script src="/assets/js/plugins/tippy-bundle.umd.min.js"></Script>
        <Script src="/assets/js/plugins/jquery.magnific-popup.min.js"></Script>
        <Script src="/assets/js/plugins/jquery.ajaxchimp.min.js"></Script>

        {/* <!-- Activation JS --> */}
        <Script src="/assets/js/main.js"></Script>
      </body>
    </html>
  );
}
