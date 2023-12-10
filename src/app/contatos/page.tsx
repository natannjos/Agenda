"use client";
import ContactFormButton from "@/components/AddButton";
import ContactList from "@/components/ContactList";
import { IContact } from "@/interfaces/Contact";
import React from "react";

const ListaDeContatos: React.FC = () => {
  const contacts: IContact[] = [
    {
      id: 1,
      nome: "John Doe",
      email: "john@example.com",
      createdAt: new Date("2021-09-01"),
    },
    {
      id: 2,
      nome: "Jane Smith",
      email: "jane@example.com",
      createdAt: new Date("2021-09-02"),
    },
    // Adicione mais contatos aqui...
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      {contacts.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Minha Agenda</h1>
          <ContactList contacts={contacts} />
          <ContactFormButton />
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Minha Agenda</h1>
          <p className="text-gray-500 text-center">
            Você ainda não tem nenhum contato. <ContactFormButton />
          </p>
        </>
      )}
    </div>
  );
};

export default ListaDeContatos;
