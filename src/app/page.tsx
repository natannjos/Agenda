"use client";
import Link from "next/link";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";

import * as Yup from "yup";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const emptyUser = {
    email: "",
    password: "",
  };
  const router = useRouter();
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

                  password: Yup.string().required("Campo obrigatório"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    resetForm();
                    router.push("/contatos");
                  }, 400);
                }}
              >
                <Form>
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

                  <div className="form-control mt-6 gap-2">
                    <button
                      type="submit"
                      className="btn btn-success text-white"
                    >
                      Login
                    </button>

                    {/* voltar para o login */}
                    <div className="flex flex-row gap-2 h-full w-full">
                      <Link href={"/cadastro"} className="btn">
                        <span className="flex flex-row h-full items-center">
                          Cadastrar novo usuário
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

export default Home;
