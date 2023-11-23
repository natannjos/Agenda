import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import * as Yup from "yup";
import { FaSave } from "react-icons/fa";
import { Contact } from "@/interfaces/contact";
import { useEffect, useRef } from "react";

const ContactForm = ({ clearForm = false }: { clearForm?: boolean }) => {
  const emptyContact: Contact = {
    email: "",
    nome: "",
    telefone: "",
    endereco: "",
    empresa: "",
  };

  const formikRef = useRef<FormikProps<Contact> | null>(null);

  useEffect(() => {
    console.log("clearForm", clearForm);
    if (clearForm) {
      formikRef.current?.resetForm();
    }
  }, [clearForm]);

  return (
    <Formik
      innerRef={formikRef} // assign ref to formikRef to call resetForm outside Formik
      initialValues={emptyContact}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Email inválido")
          .required("Campo obrigatório"),
        nome: Yup.string()
          .required("Campo obrigatório")
          .min(3, "O nome deve ter pelo menos 3 caracteres")
          .max(255, "O nome deve ter no máximo 255 caracteres"),
        telefone: Yup.string()
          .required("Campo obrigatório")
          .max(11, "Telefone deve ter no máximo 11 dígitos"),
        endereco: Yup.string(),
        empresa: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isSubmitting, isValid, errors }) => {
        return (
          <Form className="form-control flex flex-col gap-4 my-4 ">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className={`input input-bordered ${
                  // on error the input border will be red
                  errors.email ? "input-error" : "input-success"
                }`}
                placeholder="Informe o email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-error"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="nome">Nome Completo</label>
              <Field
                type="text"
                name="nome"
                className={`input input-bordered ${
                  // on error the input border will be red
                  errors.nome ? "input-error" : "input-success"
                }`}
                placeholder="Informe o nome"
              />
              <ErrorMessage
                name="nome"
                component="div"
                className="text-error"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="telefone">Telefone</label>
              <Field
                type="number"
                name="telefone"
                className={`input input-bordered ${
                  errors.telefone ? "input-error" : "input-success"
                }`}
                placeholder="Informe o telefone"
              />
              <ErrorMessage
                name="telefone"
                component="div"
                className="text-error"
              />
            </div>

            {/* Campo de Endereço */}
            <div className="flex flex-col">
              <label htmlFor="endereco">Endereço</label>
              <Field
                type="text"
                name="endereco"
                className="input input-bordered"
                placeholder="Informe o endereço"
              />
            </div>

            {/* Campo de Empresa */}
            <div className="flex flex-col">
              <label htmlFor="empresa">Empresa</label>
              <Field
                type="text"
                name="empresa"
                className="input input-bordered"
                placeholder="Informe a empresa"
              />
            </div>
            <div className="flex flex-row gap-2">
              <div className="tooltip" data-tip="Salvar">
                <button
                  className={`btn text-base-200 ${
                    isValid ? "btn-success" : "btn-disabled"
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  <FaSave />
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
