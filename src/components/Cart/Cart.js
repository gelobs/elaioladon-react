import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import CartColumns from "./CartColums";
import NavbarOther from "../NavbarOther";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <NavbarOther />
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
