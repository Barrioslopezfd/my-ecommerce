"use client";

import { trpc } from "@/trpc/client";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";

type VerifyEmailProps = {
  token: string;
};

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2 text-center">
        <XCircle className="text-red-600" size={128} />
        <h3 className="text-4xl font-semibold">There was a problem</h3>
        <p className="text-muted-foreground">
          This token is not valid or might be expired. Please try again.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <CheckCircle2 className="text-green-400" size={128} />
        <h3 className="text-4xl font-semibold">You&apos;re all set!</h3>
        <p className="mt-1 text-center text-muted-foreground">
          Thank you for verifying your email.
        </p>
        <Link className={buttonVariants({ className: "mt-4" })} href="/sign-in">
          Sign in
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin text-zinc-300" size={128} />
        <h3 className="text-4xl font-semibold">Verifying...</h3>
        <p className="text-muted-foreground">This won&apos;t take long.</p>
      </div>
    );
  }
};

export default VerifyEmail;
