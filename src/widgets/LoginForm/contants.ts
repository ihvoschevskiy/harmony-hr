import * as Yup from "yup";

const emailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const initialValues = { email: "", password: "" };

export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailValidationPattern, "Некорректный email")
    .required("Обязательное поле"),
  password: Yup.string()
    .min(4, "Минимальная длина пароля 4 символов")
    .required("Обязательное поле"),
});
