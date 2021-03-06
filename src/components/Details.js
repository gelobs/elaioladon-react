import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import NavbarOther from "../components/NavbarOther";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarOther />
        <ProductConsumer>
          {(value) => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart,
            } = value.detailProduct;
            return (
              <div className="container py-5">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-yellow my-3">
                    <h1>{title}</h1>
                  </div>
                </div>
                {/* end title */}
                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-3 my-3 text-capitalize px-5">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  {/* product text */}
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <h2 className="text-capitalize">product : {title} </h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      produced by :{" "}
                      <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-yellow text-capitalize">
                      <strong>
                        price: <span>€</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      product information:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/* buttons */}
                    <div>
                      <Link to="/">
                        <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
