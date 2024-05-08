import React from "react";
import "./subcard.css";

const SubCard = () => {
  return (
    <div className="subCardContainer">
      <div className="upperPosition">
        <p className="subTitle">Success stories</p>
        <p className="title">Every success journey we’ve encountered.</p>
      </div>
      <div className="secondDiv">
        <div class="div-1">
          <div class="test">
            <img src="./uploads/sparkle.png" alt="not found" class="testimg" />
            <p class="percFont">40%</p>
            <p class="secFont">
              Achieved reduction in project execution time by optimising team
              availability
            </p>
          </div>

          <div class="tenper">
            <img src="./uploads/Frame.png" alt="not found" />
            <div>
              <p class="first">10 days</p>
              <p class="second">Staff Deployment</p>
            </div>
          </div>

          <div class="imgDim">
            <img src="./uploads/imgg.png" alt="img not found" />
          </div>

          <div class="lastItem">
            <div>
              <span class="dollar">$0.5</span>
              <span class="million">million</span>
            </div>
            <div className="textLast">
              Reduced client expenses by saving on hiring and employee costs.
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="textDiv2">
            Enhance fortune 50 company’s insights teams research capabilities
          </div>
          <img src="./uploads/tettt.png" alt="not found" className="crow" />
          <div className="btn-3">Explore More</div>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
