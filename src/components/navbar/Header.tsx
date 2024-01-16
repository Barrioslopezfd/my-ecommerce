import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "../ui/button";
import Cart from "./Cart";

export default function Header() {
  const user = 1;
  {
    /* TODO: VER QUE ONDA USUARIO Y LINEA 30 */
  }

  return (
    <header className="sticky top-0 z-50 flex h-16 w-4/5 items-center justify-around border-b bg-background p-3 px-2.5 md:px-20">
      {/* TODO: Navbar para moviles */}
      <Link href="/ ">
        <Icons.logo className="size-20 lg:size-14" />
      </Link>
      <nav className="z-50 hidden lg:block">
        <NavItems />
      </nav>
      {/* SIGN-IN SIGN-UP LOG-OUT */}

      {user ? (
        <section className="hidden gap-1 lg:flex lg:flex-1 lg:justify-end">
          <p>Log Out</p>
          <span className="mx-4 h-6 w-px bg-border" aria-hidden="true" />
          <Cart />
        </section>
      ) : (
        <section className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "ghost" })}
          >
            Sign in
          </Link>
          <span className="h-6 w-px bg-border" aria-hidden="true" />
          <Link
            href="/create-account"
            className={buttonVariants({ variant: "ghost" })}
          >
            Create account
          </Link>
        </section>
      )}
    </header>
  );
}
