import React, { Component } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import AboutMainLeft from "../components/AboutMainLeft";
import AboutMainRight from "../components/AboutMainRight";
import Footer from "../components/Footer";

export default class AboutSection extends Component {
  render() {
    return (
      <React.Fragment>
        <AboutHeader className="container-fluid mx-auto text-center" id="about">
          <Title text="about us" />
          <h5>
            Elaioladon began in 2020 with a love, a passion - perhaps even
            an obsession - with olive oil. Today, we are the bridge between
            thousands of consumers and the world’s best olive oil producers.
          </h5>
        </AboutHeader>
        <AboutMainLeft />
        <AboutMainRight />
        <Footer />
      </React.Fragment>
    );
  }
}

const AboutHeader = styled.div`
  background-color: var(--mainGrey);
`;
