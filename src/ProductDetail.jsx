import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import Loading from "./Loading";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { Helmet } from "react-helmet";
import ItemNotFound from "./ItemNotFound";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      let p = getProductData(id);
      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }
  function onButtonClick(event) {
    onAddToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <ItemNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{product.title}</title>
        <meta name="title" content={product.title} />
        <meta name="description" content={product.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dripcart.netlify.app/" />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.thumbnail} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dripcart.netlify.app/" />
        <meta property="twitter:title" content={product.title} />
        <meta property="twitter:description" content={product.description} />
        <meta property="twitter:image" content={product.thumbnail} />
      </Helmet>
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
            ${product.price}
          </h2>
          <p className="my-2 text-l sm:my-4 sm:text-2xl">
            {product.description}
          </p>
          <div className="flex items-center content-center">
            <input
              className="w-24 text-3xl text-center border"
              type="number"
              value={count}
              onChange={handleCountChange}
            />
            <button
              onClick={onButtonClick}
              className="p-2 px-4 m-2 text-white bg-red-500 sm:px-16 rounded-xl"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-5 py-2 bg-slate-100">
        {id > 1 && (
          <Link
            to={"/Products/" + (id - 1)}
            className="flex items-center justify-center p-2 px-5 text-xl text-white bg-red-300 rounded-full md:text-4xl hover:bg-white hover:text-red-300"
          >
            <HiArrowSmLeft />
            Previous
          </Link>
        )}
        {id <= 1 && <div></div>}

        <Link
          to={"/Products/" + (id + 1)}
          className="flex items-center justify-center p-2 px-5 text-xl text-white bg-red-300 rounded-full md:text-4xl hover:bg-white hover:text-red-300"
        >
          <HiArrowSmRight />
          Next
        </Link>
      </div>
    </>
  );
}
export default ProductDetail;
