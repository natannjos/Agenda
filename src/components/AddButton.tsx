import { FaPlus } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const AddButton: React.FC = () => {
  return (
    <div>
      <div className="tooltip absolute bottom-8 right-8" data-tip="Add Contato">
        <button
          className="btn btn-success text-white "
          onClick={() => {
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
          <ContactForm />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddButton;
