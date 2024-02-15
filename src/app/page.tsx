import ProductReel from "@/components/main/ProductReel";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen max-w-5xl flex-1 flex-grow flex-col items-center bg-background py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl ">
        <p>The furute</p> <p>at a click distance</p>
      </h1>
      <p className="mt-6 max-w-prose text-muted-foreground sm:text-lg">
        Welcome to Style! Your satisfaction is our main drive.
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <Link href="/products" className={buttonVariants()}>
          Browse Trending
        </Link>
        <Button variant="ghost">
          <Briefcase size={24} strokeWidth={1.7} className="pr-1" />
          Our refund policy
        </Button>
      </div>
      {/* TODO: Lista de productos */}
      <ProductReel
        query={{ sort: "desc", limit: 4 }}
        href="/products"
        title="Brand New"
      />
    </main>
  );
}
