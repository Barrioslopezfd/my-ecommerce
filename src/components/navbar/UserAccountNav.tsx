import { Button } from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";

export default function UserAccountNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" size="sm" className="relative">
          My Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60  bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2"></div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
