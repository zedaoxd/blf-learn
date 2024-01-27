import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";
import { BarChart, Clock, FileText, GraduationCap } from "lucide-react";
import CardDescriptionHorizontal from "./card-description-horizontal";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import priceToTsx from "@/components/shared/priceToTsx";

const jost = Jost({ subsets: ["latin"], weight: ["400"] });

type CardCourseHorizontalProps = {
  id: string;
  author: string;
  title: string;
  thumbnail: string;
  duration: string;
  students: number;
  lessons: number;
  price: number;
  level: string;
  discontPercentage?: number;
};

export default function CardCourseHorizontal({
  id,
  author,
  title,
  thumbnail,
  duration,
  students,
  lessons,
  price,
  level,
  discontPercentage,
}: CardCourseHorizontalProps) {
  return (
    <Card className="w-full grid grid-cols-3 h-64 overflow-hidden">
      <CardContent className="relative">
        <Image src={thumbnail} alt={title} fill sizes="100%" />
      </CardContent>

      <div className="col-span-2 flex flex-col justify-between">
        <CardHeader>
          <p className={cn(jost.className, "text-base leading-6")}>
            by: <span className="font-bold">{author}</span>
          </p>

          <CardTitle className="text-xl font-semibold leading-6 capitalize">
            {title}
          </CardTitle>

          <CardDescription className="flex gap-6">
            <CardDescriptionHorizontal
              description={`${duration} Weeks`}
              Icon={Clock}
            />

            <CardDescriptionHorizontal
              description={`${students} students`}
              Icon={GraduationCap}
            />

            <CardDescriptionHorizontal description={level} Icon={BarChart} />

            <CardDescriptionHorizontal
              description={`${lessons} lessons`}
              Icon={FileText}
            />
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-col">
          <Separator />

          <div className="w-full flex justify-between">
            <p>{priceToTsx(price, discontPercentage)}</p>

            <Link
              href={`/courses/${id}`}
              className={cn(
                jost.className,
                "font-medium leading-7 text-lg hover:underline"
              )}
            >
              View More
            </Link>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
