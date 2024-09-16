import { FC } from "react";
import Input, { InputProps } from "../Input";
import { useFormContext } from "@shared/hooks/useFormContext";
import { FormControlProps } from "./types";

export type FormInputProps = Omit<InputProps, "value" | "onChange" | "onBlur"> &
  FormControlProps;

const FormInput: FC<FormInputProps> = ({ name, ...restProps }) => {
  const { controlValue, setControlValue, setControlTouched, getControlError } =
    useFormContext(name);

  const error = getControlError();

  return (
    <>
      <Input
        {...restProps}
        value={controlValue}
        onChange={setControlValue}
        onBlur={setControlTouched}
        error={error}
      />
    </>
  );
};

export default FormInput;
