import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Title from "../components/Title";
import Product from "../components/Product";

export default class ProductSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-4">
          <div className="container" id="product">
            <Title text="our products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
