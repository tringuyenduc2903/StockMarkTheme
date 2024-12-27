import type { ReactNode } from "react";
import { Suspense } from "react";

import Loading from "@/app/loading";
import Header from "@/components/Header/Header";
import SalesNav from "@/components/Header/SalesNav";
import Footer from "@/shared/Footer/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SalesNav />
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </>
  );
}
