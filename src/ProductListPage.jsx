import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import NoMatching from "./NoMatching";
import { getProductList } from "./api";
import Loading from "./Loading";
import { Helmet } from "react-helmet";
function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const xyz = getProductList();

    xyz.then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "sortByPriceLtoH") {
    data.sort((a, b) => a.price - b.price);
  } else if (sort == "sortByPriceHtoL") {
    data.sort((a, b) => b.price - a.price);
  } else if (sort == "sortByName") {
    data.sort((a, b) => (a.title < b.title ? -1 : 1));
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSlotChange(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col flex-wrap items-center p- justify-evenly">
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
      <div className="flex flex-col items-center justify-center w-full gap-4 px-10 my-5 md:flex-row">
        <input
          value={query}
          type="text"
          className="px-5 py-1 mx-10 text-2xl border shadow-lg xl:w-1/2 sm:w-96 w-72"
          placeholder="Search"
          onChange={handleQueryChange}
        />
        <select
          onChange={handleSlotChange}
          className="px-5 py-1 text-2xl border shadow-lg xl:w-1/4 sm:w-80 w-60"
          value={sort}
        >
          <option value="default">Default Sort</option>
          <option value="sortByName">Sort by Name</option>
          <option value="sortByPriceLtoH">Sort by Price (Low to High)</option>
          <option value="sortByPriceHtoL">Sort by Price (High to Low)</option>
        </select>
      </div>

      <div className="flex flex-wrap items-center self-center p-5">
        {data.length > 0 && <ProductList products={data} />}
        {data.length == 0 && (
          <>
            <NoMatching>Product Not Found!</NoMatching>
            <NoMatching>Try Something Else</NoMatching>
          </>
        )}
      </div>
    </div>
  );
}
export default ProductListPage;
