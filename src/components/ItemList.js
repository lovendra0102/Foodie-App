import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState([]);
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
    setAddedItems((prevState) => [...prevState, item?.card?.info?.id]);
  };

  if (!items || !Array.isArray(items)) {
    return <p>No items available</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-base">
                {item?.card?.info?.name}
              </span>
              <span className="font-medium text-base">
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute ">
              <button
                className="p-2 mx-10 my-auto bg-gray-800 text-white rounded-lg font-semibold"
                onClick={() => handleAddItem(item)}
                disabled={addedItems.includes(item?.card?.info?.id)}
              >
                {addedItems.includes(item?.card?.info?.id) ? "Added" : "Add +"}
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
