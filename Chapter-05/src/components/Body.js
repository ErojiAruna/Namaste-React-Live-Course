import { useState } from 'react';
import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {
  //  const searchTxt = 'KFC';
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState(''); // To create state varialble

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            // update the state - restaurants
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant__list">
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard {...restaurant.data} key={index} />;
        })}
      </div>
    </>
  );
};

export default Body;
