import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import NoMatching from "./NoMatching";
import { getProductList } from "./api";
import Loading from "./Loading";
import { Helmet } from "react-helmet";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { range } from "Lodash";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { range } from "lodash";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function ProductListPage() {
<<<<<<< HEAD
=======
  const [productData, setProductData] = useState();
>>>>>>> 0f75e58 (login)
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const [productData, setProductData] = useState({ data: [], meta: {} });

<<<<<<< HEAD
  const params = Object.fromEntries([...searchParams]);

  let { query, sort, page } = params;

  query = query || "";
  sort = sort || "default";
  page = +page || 1;

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "lowToHigh") {
        sortBy = "price";
      } else if (sort == "highToLow") {
        sortBy = "price";
        sortType = "desc";
      }

      getProductList(sortBy, query, page, sortType).then(function (xyz) {
        setProductData(xyz);
=======
  let { page } = useSearchParams();

  page = page || 1;

  useEffect(
    function (sort, query) {
      let sortType;
      let sortBy;
      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "price") {
        sortBy = "price";
      } else if (sort == "priceHighToLow") {
        sortBy = "price";
        sortType = "desc";
      }

      getProductList(sortBy, query, page, sortType).then(function (body) {
        setProductData(body);
>>>>>>> 0f75e58 (login)
        setLoading(false);
      });
    },
    [sort, query, page]
  );
<<<<<<< HEAD

  function handleSearch(event) {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }
=======
>>>>>>> 0f75e58 (login)

  function handleSort(event) {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col flex-wrap items-center flex-grow p-2 justify-evenly">
      <Helmet>
        <title>Dripcart</title>
        <meta name="title" content="Dripcart" />
        <meta name="description" content="Products at your Hands" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dripcart.netlify.app/" />
        <meta property="og:title" content="Dripcart" />
        <meta property="og:description" content="Products at your Hands" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dripcart.netlify.app/" />
        <meta property="twitter:title" content="Dripcart" />
        <meta property="twitter:description" content="Products at your Hands" />
      </Helmet>
      <div className="flex flex-col items-center self-start justify-center w-full gap-4 px-10 my-5 md:flex-row">
        <div className="flex items-center justify-center gap-1 px-3 mx-10 text-2xl bg-white border shadow-lg xl:w-1/2 sm:w-96 w-72">
          <input
            id="search"
            value={query}
            type="text"
            className="w-full px-5 py-1 border-white hover:border-0 focus:border-0"
            placeholder="Search"
            onChange={handleSearch}
          />
          <FaMagnifyingGlass />
        </div>
        <select
          onChange={handleSort}
          className="px-5 py-1 text-2xl border shadow-lg xl:w-1/4 sm:w-80 w-60"
          value={sort}
        >
          <option value="default">Default Sort</option>
          <option value="title">Sort by Name</option>
          <option value="price">Sort by Price (Low to High)</option>
          <option value="priceHighToLow">Sort by Price (High to Low)</option>
        </select>
      </div>

      <div className="flex flex-wrap items-center self-center p-5">
        {productData.data.length > 0 && (
          <ProductList products={productData.data} />
        )}
        {productData.data.length == 0 && (
          <>
            <NoMatching>Product Not Found!</NoMatching>
            <NoMatching>Try Something Else</NoMatching>
          </>
        )}
      </div>

<<<<<<< HEAD
      <div className="flex items-start justify-start gap-4">
        {range(1, productData.meta.last_page + 1).map((pageNo) => (
          <Link
            key={pageNo}
            to={"?" + new URLSearchParams({ ...params, page: pageNo })}
            className={
              "p-2 px-3 m-1 text-white hover:bg-transparent hover:text-red-500 font-bold border-2 rounded-xl " +
              (pageNo === page
                ? "bg-red-500 border-red-500 "
                : "bg-red-400 border-red-400 ")
            }
          >
            {pageNo}
          </Link>
        ))}
      </div>
=======
      {range(1, productData.meta.last_page + 1).map((pageNo) => (
        <Link
          key={pageNo}
          to={"?page=" + pageNo}
          className={
            "p-2 m-1 " + (pageNo === page ? "bg-red-500" : "bg-red-400")
          }
        >
          {pageNo}
        </Link>
      ))}
>>>>>>> 0f75e58 (login)
    </div>
  );
}
export default ProductListPage;
