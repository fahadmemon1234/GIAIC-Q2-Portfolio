import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-gray-3">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-center flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-center">
          <div>
            <p className="text-sm font-bold text-gray-600">
              © 2025 Fahad Blog. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
