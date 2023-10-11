import { useState, useEffect, useContext } from 'react';
import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import { GET_RES_API } from '../config';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../../utils/helper';
import useOnline from '../../utils/useOnline';
import userContext from '../../utils/userContext';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState(''); // To create state varialble
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(GET_RES_API);
    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
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
          className="p-2 m-2 bg-purple-500 text-white rounded-md"
          onClick={() => {
            // need to filter the data
            // update the state - restaurants
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="m-20 flex flex-row flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={'/restaurant/' + restaurant?.info.id}
            key={restaurant?.info.id}
          >
            <RestaurantCard {...restaurant?.info} user={user} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
