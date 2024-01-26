import { Button } from "../ui/button";

export default function ADBanner() {
  return (
    <div className="container h-80 bg-default-ad-home-banner bg-no-repeat bg-center bg-cover overflow-hidden rounded-3xl flex items-center">
      <div className="w-[450px] flex flex-col gap-6">
        <h4 className="font-semibold text-base">GET MORE POWER FROM</h4>

        <h3 className="font-semibold text-3xl">Learn NextJS</h3>

        <p className="text-lg">
          Next Js is a React framework that is used to build SEO friendly
          websites, static websites, and server-side rendering websites.
        </p>

        <Button className="rounded-3xl">Explorer course</Button>
      </div>
    </div>
  );
}
