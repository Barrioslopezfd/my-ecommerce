import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useAuth = () => {
  const router = useRouter();
  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!res.ok)
        throw new Error(`Failed to sign out: ${res.status} ${res.statusText}`);

      router.push("/sign-in");
      router.refresh();
      toast.success("Signed out successfully");
      localStorage.removeItem("payload-token");
    } catch (err) {
      toast.error("Couldn't sign out, if error persist contact support.");
    }
  };

  return { signOut };
};
