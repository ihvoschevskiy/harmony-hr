import { FormikHelpers } from "formik";

export type FormSubmitHandler<T> = (
  values: T,
  helpers?: FormikHelpers<T>,
) => Promise<void>;

export interface FormControlProps {
  name: string;
}
