import React from "react";
import Title from "../components/Title";
import oliveoil2 from "../about-img/oliveoil2.jpg";

export default function AboutMainRight() {
  return (
    <div className="row">
      <div className="col-6 col-md-6 col-sm-6">
        <Title text="Doing Away With Confusion" />
        <h5>
          Here at Elaioladon we aim to do-away with the confusion by not only
          offering a comprehensive selection of some of the best oils in the
          world, but to also provide you with the critical information necessary
          to help find the right oil for you. We’re not just an online store,
          but a platform where the olive oil novice and connoisseur alike can
          expand their knowledge and their palate.
        </h5>
      </div>
      <div className="col-6 col-md-6 col-sm-6">
        <img src={oliveoil2} alt="oil" className="card-img-top" />
      </div>
    </div>
  );
}
