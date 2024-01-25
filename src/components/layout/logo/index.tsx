import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

type Props = {
  className?: ClassValue[];
  href?: LinkProps["href"];
};

export default function Logo({ className, href = "/" }: Props) {
  return (
    <Link
      href={href}
      className={cn(className, "flex items-center justify-center gap-1")}
    >
      <Image src="/images/logo.svg" alt="logo" width={39.3} height={30} />

      <span className="text-black font-bold">BLFLearn</span>
    </Link>
  );
}
