import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shared/shadcn/card";
import { Label } from "@shared/shadcn/label";
import Button from "@shared/ui/Button/Button";
import AppFormik from "@shared/ui/Form/AppFormik";
import FormInput from "@shared/ui/Form/FormInput";
import { FC, useCallback, useEffect } from "react";
import { initialValues, loginFormValidationSchema } from "./contants";
import { LoginForm as TLoginForm } from "./types";
import { useMutation } from "@apollo/client";
import SessionService from "@shared/utils/session";
import { useUserStore } from "@shared/store/user/store";
import { useRouter } from "next/navigation";
import { LOGIN } from "./api";

const LoginForm: FC = () => {
  const [login, { data, loading }] = useMutation(LOGIN);
  const fetchUser = useUserStore(({ fetchUser }) => fetchUser);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      const { access_token, refresh_token } = data.login;
      SessionService.login(access_token, refresh_token);
      fetchUser(router.push);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onSubmit = useCallback(async (v: TLoginForm) => {
    if (!v) throw new Error("Can not submit login form withoud data");

    try {
      await login({ variables: { ...v } });
    } catch (e) {
      console.log("Error occured on login form");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <AppFormik<TLoginForm>
        initialValues={initialValues}
        validateOnMount
        validationSchema={loginFormValidationSchema}
        onSubmit={onSubmit}
      >
        <CardContent className="grid gap-8">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <FormInput
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <FormInput id="password" type="password" name="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading} className="w-full mt-4">
            Sign in
          </Button>
        </CardFooter>
      </AppFormik>
    </Card>
  );
};

export default LoginForm;
