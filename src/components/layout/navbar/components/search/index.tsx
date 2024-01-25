import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <Button
      variant="none"
      className="border border-primary rounded-full"
      size="auto"
    >
      <SearchIcon className="h-6 w-6 text-primary " />
    </Button>
  );
}
