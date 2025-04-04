import { GROCERY } from "../utils/constants";

const Grocery = () => {
  return (
    <div className="bg-green-100 h-[529px]">
      <div className="w-6/12 mx-auto text-center">
        <h1 className="text-green-700 font-bold text-4xl pt-4">
          Grocery Store
        </h1>
        <h2 className="text-green-500 font-bold text-2xl pt-4">Coming Soon</h2>
        <img className="w-6/12 pt-4 ml-48" src={GROCERY} alt="Grocery Image" />
      </div>
    </div>
  );
};

export default Grocery;
