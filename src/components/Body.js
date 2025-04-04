import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6958531&lng=77.0805496&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Oops!!! No Internet Connection😔</h1>;

  return listOfRestaurants?.length === 0 ? (
    <Shrimmer />
  ) : (
    <div className="body bg-rose-50">
      <div className="flex mx-6">
        <div className=" m-4 p-4">
          <input
            type="text"
            className="border border-solid border-gray-500 rounded-2xl px-2 cursor-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-3 px-3  py-1 bg-green-200 rounded-2xl hover:bg-green-300"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((resList) =>
                resList.info.name
                  .toString()
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className=" mx-2 p-4 flex items-center">
          <button
            className="mx-3 px-3 py-1 bg-green-200 rounded-2xl hover:bg-green-300"
            onClick={() => {
              //filter logic here
              const filteredList = listOfRestaurants.filter(
                (resList) => resList.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mx-8">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
