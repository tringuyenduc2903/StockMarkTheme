import type { ReactNode } from "react";
import { Suspense } from "react";

import Loading from "@/app/loading";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <CheckoutHeader />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
