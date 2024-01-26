"use client";

import { cn } from "@/lib/utils";
import useTopCategories from "./useTopCategories";
import CardCategory from "./components/card-category";
import Section from "@/components/shared/section";

export default function TopCategories() {
  const { topCategories, showAll, ButtonShowAll } = useTopCategories();

  return (
    <Section
      title="Top Categories"
      subtitle="Explore our Popular Categories"
      action={ButtonShowAll}
    >
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
    </Section>
  );
}
