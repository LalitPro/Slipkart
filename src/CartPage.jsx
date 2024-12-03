import React, { useEffect, useState } from "react";

import ControlStrip from "./ControlStrip";

import { getProductData } from "./api";

import { ImCross } from "react-icons/im";

import Loading from "./Loading";


function CartPage({ cart, updateCart }) {

const [loading, setLoading] = useState(true);

const [products, setProducts] = useState([]);

const [localCart, setLocalCart] = useState(cart);

const productIds = Object.keys(cart);

console.log(cart, productIds);


useEffect(

function () {

setLocalCart(cart);

},

[cart]

);


useEffect(function () {

setLoading(true);

const myProductsPromises = productIds.map((id) => getProductData(id));


Promise.all(myProductsPromises).then((products) => {

setProducts(products);

setLoading(false);

});

}, []);


function handleRemove(productId) {

const newCart = { ...cart };

delete newCart[productId];

updateCart(newCart);

}


function updateMyCart() {

updateCart(localCart);

}


function handleChange(newValue, productId) {

const newLocalCart = { ...localCart, [productId]: newValue };

setLocalCart(newLocalCart);

}


if (loading) {

return <Loading />;

}


return (

<>

<ControlStrip />

<div className="flex flex-col items-center justify-center flex-grow w-full p-5 bg-gray-200">

{products.map(function (p) {

return (

<div key={p.id}>

{p.title}

<input

productId={p.id}

type="number"

className="w-12 p-1 border border-gray-300 rounded-md"

value={localCart[p.id]}

onChange={(event)=>{handleChange(+event.target.value, p.id)}}

/>

<button onClick={()=>{handleRemove(p.id)}}>

<ImCross />

</button>

</div>

);

})}

<button className="p-3 bg-indigo-700 rounded-md" onClick={updateMyCart}>

Update Cart

</button>

</div>

</>

);

}


export default CartPage;
