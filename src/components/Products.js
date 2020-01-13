import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
// Components
import Product from "./Product";

const Products = () => {
  const { products, addItem } = useContext(ProductContext);
  //   console.log(productContext);
  return (
    <div className="products-container">
      {/* {props.products.map(product => (
        <Product key={product.id} product={product} addItem={props.addItem} />
      ))} */}
      {products.map(e => (
        <Product key={e.id} product={e} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
