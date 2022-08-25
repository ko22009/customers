export type Customers = {
  id: string;
  name: string;
  company: string;
  email: string;
  isAdmin?: boolean;
  password: string;
}

const customers: Customers[] = [
  {
    id: '1',
    name: 'Jame Cooper',
    company: 'Apple',
    email: 'jessica.hanson@example.com',
    isAdmin: true,
    password: '12345678'
  },
  {
    id: '2',
    name: 'Guy Hawkins',
    company: 'IBM',
    email: 'bill.sanders@example.com',
    isAdmin: true,
    password: '12345678'
  },
  {
    id: '3',
    name: 'Jenny Wilson',
    company: 'Gillette',
    email: 'georgia.young@example.com',
    password: '12345678'
  },
  {
    id: '4',
    name: 'Robert Fox',
    company: 'Ferrari',
    email: 'sara.cruz@example.com',
    isAdmin: true,
    password: '12345678'
  },
  {
    id: '5',
    name: 'Cody Fisher',
    company: 'Starbucks',
    email: 'jackson.graham@example.com',
    isAdmin: true,
    password: '12345678'
  },
  {
    id: '6',
    name: 'Albert Flores',
    company: 'Nintendo',
    email: 'tanya.hill@example.com',
    password: '12345678'
  },
  {
    id: '7',
    name: 'Cameron Williamson',
    company: 'General Electric',
    email: 'michael.mitc@example.com',
    password: '12345678'
  },
];

export default customers