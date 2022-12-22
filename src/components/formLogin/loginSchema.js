import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().required("O email é obrigatório").email("Email precisa ser válido"),
    password: yup.string().required("A senha obrigatória"),
});