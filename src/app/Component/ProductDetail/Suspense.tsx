import React, { Suspense } from "react";
import ProductDetail from "./page";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail />
    </Suspense>
  );
}
