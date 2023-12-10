import { FaPlus } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { useState } from "react";
import Toast from "./Toast";

const AddButton: React.FC = () => {
  const [clearForm, setClearForm] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const closeModal = () => {
    const element = document.getElementById(
      "add_user_form"
    ) as HTMLDialogElement;
    if (element !== null) {
      element.close();
    }
  };

  const handleSubmit = () => {
    setClearForm(true);
    closeModal();
    setShowToast(true);
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <div className="tooltip absolute bottom-8 right-8" data-tip="Add Contato">
        <button
          className="btn btn-success text-white "
          onClick={() => {
            setClearForm(false);
            const element = document.getElementById(
              "add_user_form"
            ) as HTMLDialogElement;
            if (element !== null) {
              element.showModal();
            }
          }}
        >
          <FaPlus size={20} />
        </button>
      </div>

      <Toast
        message="Contato adicionado com sucesso!"
        type="success"
        show={showToast}
        closeToast={closeToast}
      />

      <dialog id="add_user_form" className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Adicione um novo contato</h3>
          <ContactForm clearForm={clearForm} onSubmit={handleSubmit} />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleSubmit}
              >
                ✕
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleSubmit}></button>
        </form>
      </dialog>
    </>
  );
};

export default AddButton;
