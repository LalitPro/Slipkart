import React from "react";

function Product(data) {
  return (
    <div class="border h-auto w-72 drop-shadow-ld flex flex-col items-center gap-5">
      <img class="w-full" src={data.photo} />
      <div class="p-5">
        <h1 class="font-bold">{data.title}</h1>
        <p class="m-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est
          obcaecati molestiae sapiente.
        </p>
        <button class="py-2 text-center text-white bg-gray-400 px-20 hover:bg-slate-600">
          Here's why
        </button>
      </div>
    </div>
  );
}

export default Product;
