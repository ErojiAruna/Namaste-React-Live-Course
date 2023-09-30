import { useState, useEffect } from 'react';
import { RES_MENU_URL } from '../src/config';

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
