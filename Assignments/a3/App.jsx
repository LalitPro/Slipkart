import { useState } from "react";
import Product from "./product";

function App() {
  return (
    <div className="flex flex-wrap items-center h-screen justify-evenly">
      <Product
        title="Trees"
        photo="https://treesforall.nl/app/uploads/2022/03/Bos-Nederland-Epe-e1719389547661-1920x0-c-default.webp"
      />
      <Product
        title="Waterfall"
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuHahkkc1pR5kVs1a143AQtUBgDUtkA8bew&s"
      />
      <Product
        title="Garden"
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUEzLKGWhf-Oc2y46H9-0xSXITsgTQklZNQ&s"
      />
      <Product
        title="Bridge"
        photo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
      />
      <Product
        title="Cat"
        photo="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
      />
      <Product
        title="Tiger"
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s"
      />
    </div>
  );
}

export default App;
