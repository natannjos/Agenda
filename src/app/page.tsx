"use client";
import React from "react";
import { FaPencil, FaPlus, FaTrash } from "react-icons/fa6";

// Mock de dados de eventos, substitua pela sua importação real do JSON
// types.ts
export interface Contact {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
}

interface ContactListProps {
  contacts: Contact[];
}

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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
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

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra bg-base-100  ">
        {/* head */}
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Criação</th>
            <th>Ações</th>
          </tr>{" "}
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.createdAt?.toLocaleDateString()}</td>
              <td className="flex gap-2">
                <div className="tooltip" data-tip="Editar">
                  <button className="btn btn-sm btn-primary">
                    <FaPencil />
                  </button>
                </div>
                <div className="tooltip" data-tip="Excluir">
                  <button className="btn btn-sm btn-error text-white">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Criação</th>
            <th>Ações</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const Home: React.FC = () => {
  const contacts: Contact[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      createdAt: new Date(),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      createdAt: new Date(),
    },
    // Adicione mais contatos aqui...
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Minha Agenda</h1>
      <ContactList contacts={contacts} />
      <AddButton />
    </div>
  );
};

export default Home;
