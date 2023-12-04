"use client";
import ContactFormButton from "@/components/AddButton";
import ContactList from "@/components/ContactList";
import { Contact } from "@/interfaces/contact";
import React from "react";

const Home: React.FC = () => {
  const contacts: Contact[] = [
    {
      id: 1,
      nome: "John Doe",
      email: "john@example.com",
      createdAt: new Date(),
    },
    {
      id: 2,
      nome: "Jane Smith",
      email: "jane@example.com",
      createdAt: new Date(),
    },
    // Adicione mais contatos aqui...
  ];

  return (
    <div className="container mx-auto p-4">
      {contacts.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Minha Agenda</h1>
          <ContactList contacts={contacts} />
          <ContactFormButton />
        </>
      ) : (
        // TODO: Add a loading spinner
        <h1 className="text-2xl font-bold mb-4">Carregando...</h1>
      )}
    </div>
  );
};

export default Home;
