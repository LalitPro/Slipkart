import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import Loading from "./Loading";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

function ProductDetail() {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  useEffect(
    function () {
      let p = getProductData(id);
      p.then(function (response) {
        setProduct(response.data);
      });
    },
    [id]
  );

  return product ? (
    <>
      <div className="flex flex-col p-3 m-5 text-gray-700 bg-white border shadow-2xl sm:mx-10 md:mx-20 sm:p-10 xl:flex-row">
        <img
          className="self-center w-96 xl:w-1/4 h-fit"
          src={product.thumbnail}
        />
        <div className="items-center content-start text-xl text-gray-600 px-3s sm:px-10">
          <h1 className="text-5xl font-bold md:text-6xl xl:text-7xl">
            {product.title}
          </h1>
          <h2 className="my-5 text-2xl font-semibold md:text-3xl xl:text-4xl">
            {product.category}
          </h2>
          <h2 className="my-5 text-3xl font-bold text-orange-500 md:text-4xl xl:text-5xl">
            Rs.{product.price}
          </h2>
          <p className="my-2 text-l sm:my-4 sm:text-2xl">
            {product.description}
          </p>
          <div className="flex items-center content-center">
            <input
              className="text-3xl text-center border w-14"
              type="number"
              defaultValue={1}
            />
            <button className="p-2 px-4 m-2 text-white bg-red-500 sm:px-16 rounded-xl">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-5 py-2 bg-slate-100">
        {id > 1 && (
          <Link
            to={"/Products/" + (id - 1)}
            className="flex items-center justify-center p-2 px-5 text-4xl text-white bg-red-300 rounded-full hover:bg-white hover:text-red-300"
          >
            <HiArrowSmLeft />
            Previous
          </Link>
        )}
        {id <= 1 && <div></div>}

        <Link
          to={"/Products/" + (id + 1)}
          className="flex items-center justify-center p-2 px-5 text-4xl text-white bg-red-300 rounded-full hover:bg-white hover:text-red-300"
        >
          <HiArrowSmRight />
          Next
        </Link>
      </div>
    </>
  ) : (
    <Loading />
  );
}
export default ProductDetail;
