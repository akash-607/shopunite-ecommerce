import React from "react";
import Product from "./Product";
import prod_data from "../../data/product_data";

function Products() {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        {" "}
        latest <span>products</span>{" "}
      </h1>
      <div className="box-container">
        {prod_data.map((e, i) => (
          <Product
            name={e.name}
            org_price={e.org_price}
            fin_price={e.fin_price}
            key={i}
            img_src={e.img_src}
            rating={e.rating}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
