import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaSave } from "react-icons/fa";

const ContactForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", nome: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email inválido")
            .required("Campo obrigatório"),
          nome: Yup.string()
            .required("Campo obrigatório")
            .length(3, "O nome deve ter pelo menos 3 caracteres"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, isValid, errors }) => (
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
              <label htmlFor="nome">Nome</label>
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
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
