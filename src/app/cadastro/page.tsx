"use client";
import { IUser } from "@/interfaces/User";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import Link from "next/link";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const CadastroDeusuario = () => {
  const emptyUser: IUser = {
    email: "",
    nome: "",
    password: "",
  };
  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <Formik
                initialValues={emptyUser}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Email inválido")
                    .required("Campo obrigatório"),
                  nome: Yup.string()
                    .required("Campo obrigatório")
                    .min(3, "O nome deve ter pelo menos 3 caracteres")
                    .max(255, "O nome deve ter no máximo 255 caracteres"),
                  password: Yup.string()
                    .required("Campo obrigatório")
                    .matches(passwordRules, {
                      message:
                        "A senha deve ter pelo menos 5 caracteres, uma letra maiúscula, uma letra minúscula e um número",
                    }),
                  confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password")], "As senhas não coincidem")
                    .required("Campo obrigatório"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
                  }, 400);
                }}
              >
                <Form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Nome</span>
                    </label>
                    <Field
                      type="text"
                      placeholder="Nome"
                      required
                      className="input input-bordered"
                      name="nome"
                    />
                    <ErrorMessage
                      name="nome"
                      component="span"
                      className="text-red-500"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <Field
                      type="email"
                      placeholder="email"
                      required
                      className="input input-bordered"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-red-500"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Senha</span>
                    </label>
                    <Field
                      type="password"
                      placeholder="Senha"
                      required
                      className="input input-bordered"
                      name="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-red-500"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirmar Senha</span>
                    </label>
                    <Field
                      type="password"
                      placeholder="Confirmar Senha"
                      required
                      className="input input-bordered"
                      name="confirmPassword"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="span"
                      className="text-red-500"
                    />
                  </div>

                  <div className="form-control mt-6 gap-2">
                    <button
                      type="submit"
                      className="btn btn-success text-white"
                    >
                      <FaSave className="mr-2" />
                      Salvar
                    </button>

                    {/* voltar para o login */}
                    <div className="flex flex-row gap-2 h-full w-full">
                      <Link href={"/"} className="btn">
                        <span className="flex flex-row h-full items-center">
                          <FaArrowLeft className="mr-2" />
                          Voltar para o login
                        </span>
                      </Link>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroDeusuario;
