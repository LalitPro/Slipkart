import { useState } from "react";
import { ImCross } from "react-icons/im";

function CartRow({ product, quantity, onQuantityChange, onRemove }) {
  const [showMe, setShowMe] = useState(true);
  function handleChange(event) {
    onQuantityChange(product.id, +event.target.value);
  }

  function handleCrossClick() {
    onRemove(product.id);
    setShowMe(false);
  }

  return (
    <>
      {showMe && (
        <div className="flex flex-col items-center px-4 py-2 space-x-4 border border-gray-300 sm:flex-row">
          <span className="flex items-center w-10 h-10">
            <ImCross onClick={handleCrossClick} />
          </span>
          <div className="w-full xs:w-1/2 sm:w-10 sm:h-10">
            <img
              className="object-cover w-full h-full"
              src={product.thumbnail}
            />
          </div>
          <h3 className="grow">{product.title}</h3>
          <span className="w-20">${product.price}</span>
          <div className="w-32">
            <input
              type="number"
              className="w-12 p-1 mx-2 border border-gray-300 rounded-md"
              value={quantity}
              onChange={handleChange}
            />
          </div>
          <span className="w-20">${product.price * quantity}</span>
        </div>
      )}
    </>
  );
}
export default CartRow;
