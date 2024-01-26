"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Jost } from "next/font/google";
import useTopCategories from "./useTopCategories";
import CardCategory from "./components/card-category";

const jost = Jost({ subsets: ["latin"], weight: ["400"] });

export default function TopCategories() {
  const { topCategories, showAll, toggleShowAll } = useTopCategories();

  return (
    <section className="container flex flex-col gap-10">
      <div className="flex flex-col gap-2 justify-between sm:flex-row">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-semibold">Top Categories</h2>

          <p className={cn(jost.className, "text-lg")}>
            Explore our Popular Categories
          </p>
        </div>

        <Button
          variant="outline"
          className="rounded-3xl font-bold"
          onClick={toggleShowAll}
        >
          {showAll ? "Show Less" : "Show All"}
        </Button>
      </div>

      <div
        className={cn(
          "pt-3 grid gap-7 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
          showAll ? "" : "max-h-[25rem] overflow-hidden"
        )}
      >
        {topCategories.map((category) => (
          <CardCategory key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
}
