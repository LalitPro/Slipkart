import React from "react";

function Product() {
  return (
    <div class="flex p-10 m-10 text-gray-700 bg-white border shadow-2xl">
      <img
        class="w-1/2 h-fit"
        src="https://cdn.discordapp.com/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg?ex=6706292a&is=6704d7aa&hm=a339bdd8abdd37445c6f29d5307cd940a3978bab941525dd246bb737f88136cc&"
      />

      <div class="items-center content-start px-10 text-xl text-gray-600">
        <h1 class="text-5xl">Black Printed Coffee Mug</h1>
        <h2 class="text-4xl font-bold my-9">$15.00</h2>
        <p class="my-4 text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="flex items-center content-center">
          <input
            class="text-3xl text-center border w-14"
            type="number"
            value="1"
          />
          <button class="p-2 px-16 m-2 text-white bg-red-500 rounded-xl">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;
