import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, category, title, price, id }) {
  return (
    <div className="flex flex-col items-start p-2 mx-4 text-xl text-gray-600 bg-gray-100 rounded-md md:w-80 max-w-96 hover:bg-gray-200 justify-evenly">
      <div className="overflow-hidden max-w-96 h-fit">
        <img
          className="self-center object-cover w-full h-full duration-300 hover:scale-125 aspect-square"
          src={thumbnail}
        />
      </div>
      <div className="lg:text-lg text-md">{category}</div>
      <Link to={"/Products/" + id}>
        <div className="font-serif text-gray-800 lg:text-3xl">{title}</div>{" "}
      </Link>
      <div> ${price}</div>
      <Link to={"/Products/" + id} className="text-indigo-700">
        More Details
      </Link>
    </div>
  );
}

export default Product;
