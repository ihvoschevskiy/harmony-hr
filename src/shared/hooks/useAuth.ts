import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER } from "@shared/features/fetchUser/request";
import { REFRESH_TOKEN } from "@shared/features/refreshToken";
import { useUserStore } from "@shared/store/user/store";
import { User } from "@shared/types/user";
import SessionService from "@shared/utils/session";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuth = (user: User | null) => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const { data: userData, error: userFetchingError } = useQuery(FETCH_USER, {
    context: {
      headers: {
        authorization: `Bearer ${SessionService.accessToken}`,
      },
    },
  });

  const [refresh, { data: refreshTokenData }] = useMutation(REFRESH_TOKEN);

  type ApiError = {
    code: string;
    originalError: { message: string; statusCode: number };
  };

  useEffect(() => {
    if (!userFetchingError) return;
    const apiError = userFetchingError.cause?.extensions as ApiError;
    const code = apiError.originalError.statusCode;

    if (code === 401) {
      const token = SessionService.refreshToken;
      if (!token) {
        router.push("/login");
        return;
      }
      refresh({ variables: { token: token } });
    } else {
      router.push("/login");
    }
  }, [refresh, router, userFetchingError]);

  useEffect(() => {
    if (!refreshTokenData) return;

    const { access_token, refresh_token } = refreshTokenData.refreshToken;
    SessionService.login(access_token, refresh_token);
    router.refresh();
  }, [refreshTokenData, router, setUser]);

  useEffect(() => {
    if (userData) setUser(userData);
    router.push("/info");
  }, [userData, setUser, router]);

  useEffect(() => {
    if (!user) {
      const token = SessionService.accessToken;

      if (!token) {
        router.push("/login");
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
