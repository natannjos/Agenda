import { IContact } from "@/interfaces/Contact";
import { FaPencil, FaTrash } from "react-icons/fa6";

const ContactList = ({ contacts }: { contacts: IContact[] }) => {
  return (
    <div
      className="overflow-x-auto 
    w-11/12 
    md:w-10/12
    lg:w-9/12
    xl:w-8/12
    2xl:w-7/12
    3xl:w-6/12
    4xl:w-5/12
     "
    >
      <table className="table table-xs md:table-md table-zebra bg-base-100  ">
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
              <td className="font-bold">{contact.nome}</td>
              <td>{contact.email}</td>
              <td>{contact.createdAt?.toLocaleDateString()}</td>
              <td className="flex gap-2">
                <div className="tooltip" data-tip="Editar">
                  <button className="btn btn-xs md:btn-sm btn-primary">
                    <FaPencil />
                  </button>
                </div>
                <div className="tooltip" data-tip="Excluir">
                  <button className="btn btn-xs md:btn-sm btn-error text-white">
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

export default ContactList;
