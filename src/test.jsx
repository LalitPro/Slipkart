import React from "react";
import CartList from "./CartList";
import { dummyProducts } from "./dummy";

function Test() {
  return <CartList products={dummyProducts} cart={{ 1: 2, 3: 4, 3: 5 }} />;
}

export default Test;
