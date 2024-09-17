// import { MutationFunctionOptions } from "@apollo/client";
import SessionService from "@shared/utils/session";

export const fetchUser = async (
  navigate: (path: string) => void,
  mutation: (opts?: MutationFunctionOptions) => void,
): Promise<void> => {
  const token = SessionService.accessToken;

  if (!token) {
    navigate("/login");
    return;
  }

  try {
    // await mutation({ variables: { ...v } });
  } catch (e) {
    console.log("Error occured on login form");
  }
};
