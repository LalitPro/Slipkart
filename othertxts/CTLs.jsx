import React, { useState, useEffect } from "react";
import Button from "./Button";
import { getProductData } from "./api"; // Assuming you have an API to get product details

function CTLs() {
  const [subtotal, setSubtotal] = useState(0); // State to hold the subtotal

  useEffect(() => {
    updateSubtotal(); // Update subtotal when component mounts or cart changes
  }, []);

  // Function to calculate subtotal
  const updateSubtotal = () => {
    const myCart = localStorage.getItem("my-cart");
    if (!myCart || myCart === "{}") {
      setSubtotal(0);
      return;
    }

    const cart = JSON.parse(myCart);
    let total = 0;

    // Loop through the cart items and fetch their prices to calculate the subtotal
    const cartPromises = Object.entries(cart).map(
      async ([productId, quantity]) => {
        const productData = await getProductData(productId); // Fetch product data
        if (productData) {
          total += productData.price * quantity; // Add to the total subtotal
        }
      }
    );

    // After fetching all product data, update the subtotal state
    Promise.all(cartPromises).then(() => {
      setSubtotal(total); // Set the new subtotal
    });
  };

  // Function to handle the Update Cart button click
  const handleUpdateCart = () => {
    updateSubtotal(); // Recalculate subtotal when button is clicked
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-start justify-center gap-2 my-10 ml-auto mr-0 text-gray-700 bg-white border border-gray-300 shadow-2xl w-96 ">
        <h2 className="w-full p-3 text-xl font-bold text-left border border-gray-300 bg-gray-50">
          Cart Tools
        </h2>
        <div className="flex flex-col items-start justify-center w-full gap-4 p-4">
          <div className="flex w-full gap-10 py-2 border-b-2 border-gray-300">
            <h3 className="font-semibold">Subtotal</h3>
            <h3 className="font-semibold">${subtotal.toFixed(2)}</h3>
          </div>
          <Button
            className="w-full px-3 font-semibold bg-red-500 hover:bg-red-600"
            onClick={handleUpdateCart} // Recalculate subtotal on click
          >
            PROCEED TO CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CTLs;
