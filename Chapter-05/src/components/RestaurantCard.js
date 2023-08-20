import { IMG_CDN_URL } from '../config';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} stars</h4>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
