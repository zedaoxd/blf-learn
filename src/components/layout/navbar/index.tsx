import { Button } from "@/components/ui/button";
import Logo from "../logo";
import Menu from "./components/menu";
import Search from "./components/search";
import MobileNavbar from "./components/mobile-navbar";

export default function Navbar() {
  return (
    <header className="container h-20 flex items-center justify-end md:justify-between">
      <Logo className="hidden md:flex" />

      <Menu className="hidden md:flex" />

      <div className="hidden md:flex items-center">
        <Button
          variant="ghost"
          className="font-bold text-black h-full rounded-none hover:bg-transparent hover:text-primary"
        >
          Login/Register
        </Button>

        <Search />
      </div>

      <MobileNavbar className="md:hidden" />
    </header>
  );
}
