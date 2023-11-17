import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaSave } from "react-icons/fa";

const ContactForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email inválido")
            .required("Campo obrigatório"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, isValid, isInitialValid }) => (
          <Form className="form-control flex flex-col gap-4 my-4 ">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className={`input input-bordered ${
                  // on error the input border will be red
                  isValid ? "input-success" : "input-error"
                }`}
                placeholder="Informe o email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-error"
              />
            </div>
            <div className="flex flex-row gap-2">
              <div className="tooltip" data-tip="Salvar">
                <button
                  className="btn btn-sm btn-success text-base-200"
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
