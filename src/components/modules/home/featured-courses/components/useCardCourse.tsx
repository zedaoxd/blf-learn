import { formatPrice } from "@/lib/utils";
import { ReactNode } from "react";

type UseCardCourse = {
  priceFormated: ReactNode;
};

export default function useCardCourse(
  price: number,
  discountPercentage?: number
): UseCardCourse {
  const formattedPriceWithDiscount = formatPrice(
    (price / 1_000) * (1 - (discountPercentage ?? 0))
  );
  const formattedFullPrice = formatPrice(price / 1_000);
  const priceWithDiscount = price * (1 - (discountPercentage ?? 0));

  const hasDiscountButNotFree = (
    <>
      <span className="text-gray-400 line-through text-lg">
        {formattedFullPrice}
      </span>
      <span className="text-red-500 ml-2 font-semibold text-lg">
        {formattedPriceWithDiscount}
      </span>
    </>
  );

  const free = (
    <>
      <span className="text-gray-400 line-through text-lg">
        {formattedFullPrice}
      </span>
      <span className="text-green-500 ml-2 font-semibold text-lg">Free</span>
    </>
  );

  const hasNoDiscount = (
    <span className="text-gray-400 text-lg">{formattedFullPrice}</span>
  );

  if (price === 0) {
    return {
      priceFormated: free,
    };
  }

  if (discountPercentage) {
    if (priceWithDiscount > 0) {
      return {
        priceFormated: hasDiscountButNotFree,
      };
    }
  }

  return {
    priceFormated: hasNoDiscount,
  };
}
