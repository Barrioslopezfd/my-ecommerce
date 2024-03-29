import { MailCheck } from "lucide-react";
import VerifyEmail from "@/components/navbar/VerifyEmail";

type PageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function VerifyEmailPage({ searchParams }: PageProps) {
  const token = searchParams.token;
  const toEmail = searchParams.to;
  return (
    <div className="container relative flex flex-col items-center justify-center pt-20 lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6">
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <MailCheck strokeWidth={1} size={128} className="mb-6" />
            <h3 className="text-2xl font-semibold">Check your email</h3>

            {toEmail ? (
              <p className="text-center text-muted-foreground">
                We&apos;ve sent a verification link to{" "}
                <span className="font-semibold">{toEmail}</span>.
              </p>
            ) : (
              <p className="text-center text-muted-foreground">
                We&apos;ve sent a verification link to your email.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
