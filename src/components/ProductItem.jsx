// import PropTypes from 'prop-types';
import { useContext } from "react";
import PriceTableComponent from "./PriceTableComponent";

const ProductItem = ({ product }) => {
  return (
    <div className="text-black">
      <div className="border-[#0ac0ac] overflow-hidden border rounded-lg p-4 shadow-xl overflow-y-auto">
        <a href={`/sitetoni/product/${product._id}`} className="cursor-pointer flex justify-center hover:shadow-md">
          <img
            src={product.images[0]}
            alt={product._id}
            className="w-96 h-64 object-cover mb-2 rounded hover:scale-110 transition ease-in-out duration-600 "
          />
        </a>
        <div className="flex justify-center">
          <p className="pt-3 pb-1 text-l">{product.name}</p>
        </div>
        <PriceTableComponent product={product} pricesEnable={false} />
      </div>
    </div>
  );
};

export default ProductItem;
