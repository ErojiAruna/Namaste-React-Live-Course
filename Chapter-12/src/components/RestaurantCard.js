import { IMG_CDN_URL } from '../config';
import { useContext } from 'react';
import userContext from '../../utils/userContext';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="w-80 h-96 p-2 m-2 rounded-t-2xl">
      <img className="rounded-2xl" src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="p-3">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines?.join(', ')}</h3>
        <h5>{deliveryTime} minutes</h5>
        <h5 className="font-bold">
          {user.name} - {user.email}
        </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
