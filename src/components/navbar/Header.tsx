import Link from "next/link";
import { Icons } from "../Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "../ui/Button";
import Cart from "./Cart";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";

export default async function Header() {
  const nextCookie = cookies();
  const { user } = await getServerSideUser(nextCookie);

  return (
    <header className="lg:sticky lg:top-0 lg:z-50 lg:flex lg:h-16 lg:w-4/5 lg:justify-between lg:border-b lg:bg-background ">
      {/* TODO: Navbar para moviles */}

      <section className="flex items-center">
        <Link href="/ " className="pb-53 self-start">
          <Icons.logo className="size-20 lg:size-14" />
        </Link>
        <nav className="z-50 hidden lg:block lg:pl-24">
          <NavItems />
        </nav>
      </section>
      {/* SIGN-IN SIGN-UP LOG-OUT */}

      <section className="hidden lg:flex lg:items-center lg:gap-6">
        {user ? (
          <>
            <p>Log Out</p>
            <span className="mx-4 h-6 w-px bg-border" aria-hidden="true" />
            <Cart />
          </>
        ) : (
          <>
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "ghost" })}
            >
              Sign in
            </Link>
            <span className="h-6 w-px bg-border" aria-hidden="true" />
            <Link
              href="/sign-up"
              className={buttonVariants({ variant: "ghost" })}
            >
              Create account
            </Link>
          </>
        )}
      </section>
    </header>
  );
}
