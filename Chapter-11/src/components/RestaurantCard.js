import { IMG_CDN_URL } from '../config';
import { useContext } from 'react';
import userContext from '../../utils/userContext';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  user,
}) => {
  return (
    <div className="w-80 h-96 p-2 m-2 rounded-t-2xl">
      <img className="rounded-2xl" src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="p-3">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines?.join(', ')}</h3>
        <h4>
          <path
            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
            fill="white"
          >
            {' '}
            {avgRating}
          </path>
        </h4>
        <h5>{deliveryTime} minutes</h5>
        <h5 className="font-bold">
          {user.name} - {user.email}
        </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
