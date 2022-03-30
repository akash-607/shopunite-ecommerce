import React from "react";
import F_product from "./F_product";
import f__data from "../../data/feature_data";

function F_products() {
  return (
    <section className="featured" id="featured">
      <h1 className="heading">
        {" "}
        <span>featured</span> products{" "}
      </h1>
      {f__data.map((e) => (
        <F_product
          prod_name={e.name}
          org_price={e.original_price}
          fin_price={e.final_price}
          img_list={e.pictures}
          description={e.description}
          rating={e.rating}
        />
      ))}
    </section>
  );
}

export default F_products;
