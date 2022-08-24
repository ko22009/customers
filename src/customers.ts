export type Customers = {
  id: number;
  name: string;
  company: string;
  email: string;
  isAdmin?: boolean;
}

const customers: Customers[] = [
  {
    id: 1,
    name: 'Jame Cooper',
    company: 'Apple',
    email: 'jessica.hanson@example.com',
    isAdmin: true,
  },
  {
    id: 2,
    name: 'Guy Hawkins',
    company: 'IBM',
    email: 'bill.sanders@example.com',
    isAdmin: true,
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    company: 'Gillette',
    email: 'georgia.young@example.com',
  },
  {
    id: 4,
    name: 'Robert Fox',
    company: 'Ferrari',
    email: 'sara.cruz@example.com',
    isAdmin: true,
  },
  {
    id: 5,
    name: 'Cody Fisher',
    company: 'Starbucks',
    email: 'jackson.graham@example.com',
    isAdmin: true,
  },
  {
    id: 6,
    name: 'Albert Flores',
    company: 'Nintendo',
    email: 'tanya.hill@example.com',
  },
  {
    id: 7,
    name: 'Cameron Williamson',
    company: 'General Electric',
    email: 'michael.mitc@example.com',
  },
];

export default customers