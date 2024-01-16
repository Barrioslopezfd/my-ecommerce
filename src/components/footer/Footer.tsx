import Perks from "./Perk";
import { perks } from "./Items";

export default function Footer() {
  return (
    <footer className="item start w-full max-w-full border-t border-border bg-accent px-6 py-5">
      <div className="flex w-max flex-col items-center gap-5 ">
        {perks.map((perk) => (
          <Perks
            key={perk.id}
            Icon={perk.Icon}
            description={perk.description}
            name={perk.name}
          />
        ))}
      </div>
    </footer>
  );
}
