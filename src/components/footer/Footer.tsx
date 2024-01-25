import Perks from "./Perk";
import { perks } from "./Items";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-screen max-w-full border-t border-border bg-accent px-6 py-5">
      <section className="flex flex-col gap-5 sm:w-max ">
        {perks.map((perk) => (
          <Perks
            key={perk.id}
            Icon={perk.Icon}
            description={perk.description}
            name={perk.name}
          />
        ))}
      </section>
    </footer>
  );
}
