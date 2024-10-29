import React from "react";

function ProductDetail(data) {
  return (
    <div class="flex p-10 m-10 text-gray-700 bg-white border shadow-2xl">
      <img class="w-96 h-fit" src={data.photo} />

      <div class="items-center content-start px-10 text-xl text-gray-600">
        <h1 class="text-5xl">{data.title}</h1>
        <h2 class="text-4xl font-bold my-9">$15.00</h2>
        <p class="my-4 text-2xl">{data.description}</p>
        <div className="flex items-center content-center">
          <input
            class="text-3xl text-center border w-14"
            type="number"
            defaultValue={1}
          />
          <button class="p-2 px-16 m-2 text-white bg-red-500 rounded-xl">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
