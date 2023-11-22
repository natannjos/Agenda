export type Contact = {
  id?: number;
  nome: string;
  email: string;
  createdAt?: Date;
  telefone?: string;
  endereco?: string;
  empresa?: string;
};

export interface ContactListProps {
  contacts: Contact[];
}
