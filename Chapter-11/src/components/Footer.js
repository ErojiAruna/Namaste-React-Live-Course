import { useContext } from 'react';
import userContext from '../../utils/userContext';

const Footer = () => {
  const { user } = useContext(userContext);

  return (
    <h4 className="p-10 m-10">
      This site is developed by {user.name} - {user.email}
    </h4>
  );
};

export default Footer;
