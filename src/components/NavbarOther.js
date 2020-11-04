import React, { Component } from "react";
import styled from "styled-components";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="elaioladon" className="navbar-brand" />
        </Link>
        <span className="text-bright text-title mr-5">Elaioladon</span>
        <ul className="nav navbar-nav">
          <Link to="/">
            <ButtonContainer>return to home page</ButtonContainer>
          </Link>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa fa-cart-plus" />
            </span>
            cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainYellow);
  .nav-link {
    cursor: pointer;
  }
  .active {
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightYellow);
    border-color: var(--lightYellow);
    color: var(--lightYellow);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
      background: var(--lightYellow);
      color: var(--mainYellow);
    }
    &focus {
      outline: none;
    }
  }
`;
