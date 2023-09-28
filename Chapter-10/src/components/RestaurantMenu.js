import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, RES_MENU_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../../utils/useRestaurant';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  if (restaurant === null) return <Shimmer />;

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } =
    restaurant?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{' Rs.'}{' '}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
