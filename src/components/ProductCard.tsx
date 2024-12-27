import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import type { ProductType } from "@/data/types";

interface ProductCardProps {
  product: ProductType;
  className?: string;
  showPrevPrice?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  product,
  className,
  showPrevPrice = false,
}) => {
  return (
    <div
      className={`transitionEffect relative rounded-2xl p-3 shadow-md ${className}`}
    >
      <div className="h-[250px] w-full overflow-hidden rounded-2xl lg:h-[220px] 2xl:h-[300px]">
        {product.justIn && (
          <div className="absolute left-6 top-0 rounded-b-lg bg-primary px-3 py-2 text-sm uppercase text-white shadow-md">
            Just In!
          </div>
        )}
        <Link
          className="h-[250px] w-full lg:h-[220px]"
          href={`/products/${product.slug}`}
        >
          <Image
            src={product.coverImage}
            alt={`${product.name} cover photo`}
            className="size-full object-cover object-bottom"
          />
        </Link>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{product.name}</h3>
          <p
            className={`text-neutral-500 ${
              showPrevPrice ? "block" : "hidden"
            } text-sm line-through`}
          >
            ${product.previousPrice}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-500">{product.category}</p>
          <p className="text-lg font-medium text-primary">
            ${product.currentPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
