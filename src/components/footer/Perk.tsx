import { LucideIcon } from "lucide-react";

type items = {
  name: string;
  Icon: LucideIcon;
  description: string;
};

export default function Perks({ Icon, description, name }: items) {
  return (
    <div className="sm:flex sm:gap-2">
      <div className="flex justify-center lg:flex-shrink-0">
        <div className="flex size-10 items-center justify-center rounded-full bg-muted-foreground text-primary-foreground sm:size-16">
          <Icon className="size-5 sm:size-7" />
        </div>
      </div>
      <div className="self-center text-center sm:text-left">
        <h3 className="text-sm font-medium text-primary sm:text-[1rem]">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground sm:text-[0.875rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
