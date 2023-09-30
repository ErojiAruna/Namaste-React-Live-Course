import { createContext } from 'react';

const userContext = createContext({
  name: 'Dummy Name',
  email: 'dummy@gmail.com',
});

export default userContext;
