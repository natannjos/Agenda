import { FaPlus } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { useState } from "react";

const AddButton: React.FC = () => {
  const [clearForm, setClearForm] = useState<boolean>(false);

  const closeModal = () => {
    const element = document.getElementById(
      "add_user_form"
    ) as HTMLDialogElement;
    if (element !== null) {
      element.close();
    }
  };
  const handleClose = () => {
    setClearForm(true);
    closeModal();
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

      <dialog id="add_user_form" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Adicione um novo contato</h3>
          <ContactForm clearForm={clearForm} onSubmit={closeModal} />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleClose}
              >
                ✕
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleClose}></button>
        </form>
      </dialog>
    </>
  );
};

export default AddButton;
