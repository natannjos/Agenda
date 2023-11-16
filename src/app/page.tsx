import React from "react";
import { calendarData } from "@/app/data/calendarData";
// Mock de dados de eventos, substitua pela sua importação real do JSON
// types.ts
export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id} className="border-b p-4 flex justify-between">
          <div>
            <p className="font-bold">{contact.name}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const contacts: Contact[] = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "234-567-8901",
      email: "jane@example.com",
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
