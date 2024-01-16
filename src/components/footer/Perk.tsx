import { LucideIcon } from "lucide-react";

type items = {
  name: string;
  Icon: LucideIcon;
  description: string;
};

export default function Perks({ Icon, description, name }: items) {
  return (
    <div className="text-center">
      <div className="flex justify-center md:flex-shrink-0">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted-foreground text-primary-foreground">
          <Icon />
        </div>
      </div>
      <h3 className="font-medium text-primary">{name}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
