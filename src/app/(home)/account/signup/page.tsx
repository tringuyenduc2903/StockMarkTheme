import Image from "next/image";

import SignupForm from "@/components/account/SignupForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import signup from "@/images/signup.jpg";
import ButtonLink from "@/shared/Button/ButtonLink";

const PageSignUp = () => {
  const breadcrumbItems = [
    { title: <ButtonLink href="/">Home</ButtonLink> },
    { title: "Account" },
  ];
  return (
    <main>
      <div className="container">
        <Breadcrumbs Items={breadcrumbItems} />
        <div className="pb-24 pt-2">
          <div className="flex flex-col md:flex-row">
            <div className="order-2 basis-1/2 md:order-1">
              <div className="relative aspect-video h-full bg-neutral-300 md:aspect-auto  lg:aspect-[8/7]">
                <Image
                  src={signup}
                  alt="about us"
                  fill
                  className="object-cover"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="order-1 flex basis-1/2 items-center bg-white px-5 py-8 dark:bg-neutral-900 md:order-1 lg:px-24">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageSignUp;
