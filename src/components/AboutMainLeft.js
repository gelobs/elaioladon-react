import React from "react";
import Title from "../components/Title";
import oliveoil1 from "../about-img/oliveoil1.jpg";

export default function AboutMainLeft() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 col-md-6 col-sm-12 col-12">
          <img src={oliveoil1} alt="oil" className="img-fluid" />
        </div>
        <div className="col-6 col-md-6 col-sm-12 col-12">
          <Title text="A passion for olive oil" />
          <h5>
            Elaioladon began with a love, a passion - perhaps even an obsession
            - with olive oil. After living-in and traveling around the
            Mediterranean basin and partaking in the wonderful cuisines of the
            regions, each using copious amounts of locally-produced extra virgin
            olive oil, we realized there was a huge deficit for quality olive
            oil in Europe.
          </h5>
        </div>
      </div>
    </div>
  );
}
