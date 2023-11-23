import { ContactListProps } from "@/interfaces/contact";
import { FaPencil, FaTrash } from "react-icons/fa6";

const ContactList: React.FC<ContactListProps> = ({
  contacts,
}: ContactListProps) => {
  return (
    <div className="overflow-x-auto">
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
              <td>{contact.nome}</td>
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
