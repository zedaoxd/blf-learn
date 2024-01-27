import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400"] });

type CardDescriptionHorizontalProps = {
  description: string;
  Icon: LucideIcon;
};

export default function CardDescriptionHorizontal({
  description,
  Icon,
}: CardDescriptionHorizontalProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-primary" />
      <span className={cn(jost.className, "text-base leading-6")}>
        {description}
      </span>
    </div>
  );
}
