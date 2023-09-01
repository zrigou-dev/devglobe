import React from "react";
import "./Work.css";
import aremo from "../../Assets/aremo.png";
import mouad from "../../Assets/mouad.png";
import coumply from "../../Assets/coumply.png";
import viral from "../../Assets/viral.png";
import { FaUpRightFromSquare } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="work" id="portfolio">
      <div className="container head">
        <h2>Portfolio</h2>
        <span></span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 content-work">
            <h3>Aremo Travaux</h3>
            <p>
              Aremo Travaux is a construction company that owns all the
              necessary construction equipment.
            </p>
            <a href="https://www.aremotravaux.ma/" target="_blank" rel="noreferrer" >
              <FaUpRightFromSquare className="go-to" />
            </a>
          </div>
          <div className="col-md-6">
            <img src={aremo} alt="aremo" />
          </div>
          {/* ****************************** */}
          <div className="col-md-6 content-work">
            <h3>Sourcing With Mouad</h3>
            <p>
            Sourcing With Mouad is a company for export, import, and worldwide product delivery.
            </p>
            <a href="https://www.sourcingwithmouad.com/" target="_blank" rel="noreferrer" >
              <FaUpRightFromSquare className="go-to" />
            </a>
          </div>
          <div className="col-md-6">
            <img src={mouad} alt="aremo" />
          </div>
          {/* ****************************** */}
          <div className="col-md-6 content-work">
            <h3>Moul Coumply</h3>
            <p>
            Moul Coumply is a shop for selling or renting all types of occasion and wedding clothes.
            </p>
            <a href="https://www.moulcoumply.ma/" target="_blank" rel="noreferrer" >
              <FaUpRightFromSquare className="go-to" />
            </a>
          </div>
          <div className="col-md-6">
            <img src={coumply} alt="aremo" />
          </div>
          {/* ****************************** */}
          <div className="col-md-6 content-work">
            <h3>Viral Wave</h3>
            <p>
            Viral Wave is a company for digital marketing and website design.
            </p>
            <a href="https://viralwave.agency/" target="_blank" rel="noreferrer" >
              <FaUpRightFromSquare className="go-to" />
            </a>
          </div>
          <div className="col-md-6">
            <img src={viral} alt="aremo" />
          </div>
          {/* ****************************** */}
        </div>
      </div>
    </div>
  );
};

export default Work;
