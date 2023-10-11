import { createContext } from 'react';

const userContext = createContext({
  user: {
    name: 'Dummy Name',
    email: 'dummy@gmail.com',
  },
});

export default userContext;
