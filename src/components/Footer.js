import React from "react";
import styled from "styled-components";
import visa from "../about-img/cards/visa.svg";
import mastercard from "../about-img/cards/mastercard.svg";
import amex from "../about-img/cards/amex.svg";
import paypal from "../about-img/cards/paypal.svg";

export default function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "lightgray" }}>
      <div className="row">
        <div className="footer-copyright text-center py-3 float-left col-md-6">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-yellow" href="/">
            {" "}
            Elaioladon{" "}
          </a>
        </div>
        <PaymentImgWrapper className="col-md-4">
          <img src={visa} alt="Payments" />
          <img src={mastercard} alt="Payments" />
          <img src={amex} alt="Payments" />
          <img src={paypal} alt="Payments" />
        </PaymentImgWrapper>
      </div>
    </div>
  );
}

const PaymentImgWrapper = styled.div`
  float: right;
  margin-top: 15px;
  padding-left: 8px;
  margin-left: 10px;
  padding-right: 6px;
  color: #9d9d9d;
`;
