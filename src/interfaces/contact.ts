export type Contact = {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
};

export interface ContactListProps {
  contacts: Contact[];
}
