"use client";

import {
  Aperture,
  BarChart,
  Brush,
  Clapperboard,
  Code2,
  FlaskConical,
  Mic,
  NotebookPen,
  Percent,
  Waypoints,
} from "lucide-react";
import { Category } from "./types";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type UseTopCategories = {
  topCategories: Category[];
  showAll: boolean;
  ButtonShowAll: React.ReactNode;
};

export default function useTopCategories(): UseTopCategories {
  const [showAll, setShowAll] = useState(false);

  function toggleShowAll() {
    setShowAll((prev) => !prev);
  }

  const topCategories: Category[] = [
    {
      name: "Art & Design",
      icon: <Brush />,
      quantity: 38,
      slug: "art-design",
    },
    {
      name: "Development",
      icon: <Code2 />,
      quantity: 33,
      slug: "development",
    },
    {
      name: "Communication",
      icon: <Mic />,
      quantity: 31,
      slug: "communication",
    },
    {
      name: "Videography",
      icon: <Clapperboard />,
      quantity: 29,
      slug: "videography",
    },
    {
      name: "Photography",
      icon: <Aperture />,
      quantity: 29,
      slug: "photography",
    },
    {
      name: "Marketing",
      icon: <Percent />,
      quantity: 29,
      slug: "marketing",
    },
    {
      name: "Content writing",
      icon: <NotebookPen />,
      quantity: 28,
      slug: "content-writing",
    },
    {
      name: "Finance",
      icon: <BarChart />,
      quantity: 24,
      slug: "finance",
    },
    {
      name: "Science",
      icon: <FlaskConical />,
      quantity: 23,
      slug: "science",
    },
    {
      name: "Network",
      icon: <Waypoints />,
      quantity: 21,
      slug: "network",
    },
  ];

  const ButtonShowAll = (
    <Button
      variant="outline"
      className="rounded-3xl font-bold"
      onClick={toggleShowAll}
    >
      {showAll ? "Show Less" : "All Categories"}
    </Button>
  );

  return {
    topCategories,
    showAll,
    ButtonShowAll,
  };
}
