import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

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
    </div>
  );
};

export default Home;
