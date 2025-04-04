import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 bg-rose-50">
      <h1 className="text-3xl font-bold">Cart 🛒</h1>
      <div>
        <button
          className="m-3 px-3 py-1 rounded-2xl bg-green-200  hover:bg-green-300 font-normal"
          onClick={handleClearCart}
        >
          Clear cart{" "}
        </button>
      </div>
      <div className="w-6/12 m-auto  bg-rose-100 rounded-lg border-b-2">
        {cartItems.length === 0 && (
          <h1 className="m-3 text-center p-2 font-semibold">
            Cart is empty. Add items to the cart!!!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
