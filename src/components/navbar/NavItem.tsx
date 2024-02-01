import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "../ui/Button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

type NavItemProps = {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
};

export default function NavItem({
  category,
  handleOpen,
  isAnyOpen,
  isOpen,
}: NavItemProps) {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5 font-semibold"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 text-muted-foreground transition-all", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <span
          className={cn(
            "absolute top-full text-sm text-muted-foreground shadow-xl",
            { "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen },
          )}
        >
          <menu className="relative grid grid-cols-2 gap-x-8 gap-y-8 bg-slate-300 px-8 py-8 shadow-xl">
            {category.featured.map((x) => (
              <li
                key={x.name}
                className="relative aspect-auto rounded-lg text-base font-semibold group-hover:opacity-75 sm:text-sm"
              >
                <Link href={x.href}>{x.name}</Link>
              </li>
            ))}
          </menu>
        </span>
      ) : null}
    </div>
  );
}
