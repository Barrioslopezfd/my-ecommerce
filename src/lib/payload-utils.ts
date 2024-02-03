import { User } from "../../payload-types";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextRequest } from "next/server";

export const getServerSideUser = async (
  cookies: NextRequest["cookies"] | ReadonlyRequestCookies,
) => {
  try {
    const token = cookies.get("payload-token")?.value;

    if (!token) {
      throw new Error("Missing token in cookies");
    }

    const meRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      },
    );

    if (!meRes.ok) {
      throw new Error(
        `Failed to fetch user data: ${meRes.status} ${meRes.statusText}`,
      );
    }

    const { user } = (await meRes.json()) as {
      user: User | null;
    };

    return { user };
  } catch (error: any) {
    console.error("Error in getServerSideUser:", (error as Error).message);
    return { user: null };
  }
};
