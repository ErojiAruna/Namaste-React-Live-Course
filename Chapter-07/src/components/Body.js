import { useState, useEffect } from 'react';
import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import { GET_RES_API } from '../config';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(''); // To create state varialble

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(GET_RES_API);
    const json = await data.json();

    // This isa bad way to do // Optional Chaining
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // Conditional Rendering
  // if restaurant is empty => shimmer Ui
  // if restaurant has data => actual data UI

  // not render component (Early return)
  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Restaurant match your Filter!!</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant__list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
