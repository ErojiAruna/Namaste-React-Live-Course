import { useRouteError } from 'react-router-dom';
import Img from '../assets/Sadness.png';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <img alt="Sadness" src={Img} />
      <h1>Oops!</h1>
      <h2>Something went wrong!!</h2>
      <h2>{err.status + ' : ' + err.statusText}</h2>
    </div>
  );
};

export default Error;
