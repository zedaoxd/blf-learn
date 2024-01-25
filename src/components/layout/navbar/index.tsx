import { Button } from "@/components/ui/button";
import Logo from "../logo";
import Menu from "./components/menu";
import Search from "./components/search";

export default function Navbar() {
  return (
    <header className="container h-20 flex items-center justify-between">
      <Logo />

      <Menu />

      <div className="flex items-center">
        <Button
          variant="ghost"
          className="font-bold text-black h-full rounded-none hover:bg-transparent hover:text-primary"
        >
          Login/Register
        </Button>

        <Search />
      </div>
    </header>
  );
}
