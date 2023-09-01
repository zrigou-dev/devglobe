import React, { useState } from "react";
import "./Skills.css";
import frontEnd from "../../Assets/front.svg";
import backEnd from "../../Assets/back.svg";
import tool from "../../Assets/tools.svg";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiFillHtml5 } from "react-icons/ai";
import { DiNpm } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoVuejs,
} from "react-icons/bi";
import { BsBootstrapFill, BsGit, BsGithub, BsWordpress } from "react-icons/bs";
import {
  SiMui,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVisualstudiocode,
  SiWoocommerce,
  SiShopify,
} from "react-icons/si";

const Skills = () => {
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
  const [tools, setTools] = useState(false);
  const [web, setWeb] = useState(false);

  const handlefront = () => {
    setFront(true);
    setBack(false);
    setTools(false);
    setWeb(false);
  };
  const handleBack = () => {
    setFront(false);
    setBack(true);
    setTools(false);
    setWeb(false);
  };
  const handleTools = () => {
    setFront(false);
    setBack(false);
    setTools(true);
    setWeb(false);
  };
  const handleWeb = () => {
    setFront(false);
    setBack(false);
    setTools(false);
    setWeb(true);
  };

  return (
    <div className="skills" id="skills">
      <div className="container head">
        <h2>Skills</h2>
        <span></span>
      </div>
      <div className="container">
        <div className="titles-skills">
          <div
            className={front ? "active front-end" : "handleHov"}
            onClick={() => handlefront()}
          >
            <img src={frontEnd} alt="" />
            <p>Front End</p>
          </div>
          <div
            className={back ? "active back-end" : "handleHov"}
            onClick={() => handleBack()}
          >
            <img src={backEnd} alt="" />
            <p>Back End</p>
          </div>
          <div
            className={tools ? "active tools" : "handleHov"}
            onClick={() => handleTools()}
          >
            <img src={tool} alt="" />
            <p>Tools</p>
          </div>
          <div
            className={web ? "active platform" : "handleHov"}
            onClick={() => handleWeb()}
          >
            <HiOutlineComputerDesktop className="icon-web" />
            <p>Web Platforms</p>
          </div>
        </div>
        <div className="skills-item">
          {front && (
            <div className="front-item">
              <h3>FRONT END</h3>
              <div>
                <div className="html">
                  <AiFillHtml5 className="icon-item" />
                  <p>HTML</p>
                </div>
                <div className="css">
                  <DiCss3 className="icon-item" />
                  <p>CSS</p>
                </div>
                <div className="js">
                  <BiLogoJavascript className="icon-item" />
                  <p>JavaScript</p>
                </div>
                <div className="react">
                  <BiLogoReact className="icon-item" />
                  <p>React</p>
                </div>
                <div className="vue">
                  <BiLogoVuejs className="icon-item" />
                  <p>Vue</p>
                </div>
                <div className="redux">
                  <SiRedux className="icon-item" />
                  <p>Redux</p>
                </div>
                <div className="bootstrap">
                  <BsBootstrapFill className="icon-item" />
                  <p>Bootstrap</p>
                </div>
                <div className="mui">
                  <SiMui className="icon-item" />
                  <p>Mui</p>
                </div>
              </div>
            </div>
          )}
          {back && (
            <div className="back-item">
              <h3>BACK END</h3>
              <div>
                <div className="node">
                  <BiLogoNodejs className="icon-item" />
                  <p>Node js</p>
                </div>
                <div className="ex">
                  <SiExpress className="icon-item" />
                  <p>Express js</p>
                </div>
                <div className="mongo">
                  <SiMongodb className="icon-item" />
                  <p>MongoDb</p>
                </div>
              </div>
            </div>
          )}
          {tools && (
            <div className="back-item">
              <h3>TOOLS</h3>
              <div>
                <div className="git">
                  <BsGit className="icon-item" />
                  <p>Git</p>
                </div>
                <div className="hub">
                  <BsGithub className="icon-item" />
                  <p>Github</p>
                </div>
                <div className="npm">
                  <DiNpm className="icon-item" />
                  <p>NPM</p>
                </div>
                <div className="post">
                  <SiPostman className="icon-item" />
                  <p>Postman</p>
                </div>
                <div className="vs">
                  <SiVisualstudiocode className="icon-item" />
                  <p>Vs Code</p>
                </div>
              </div>
            </div>
          )}
          {web && (
            <div className="web-item">
              <h3>WEB PLATFORM</h3>
              <div>
                <div className="word">
                  <BsWordpress className="icon-item" />
                  <p>Wordpress</p>
                </div>
                <div className="wooco">
                  <SiWoocommerce className="icon-item" />
                  <p>Woocommerce</p>
                </div>
                <div className="shop">
                  <SiShopify className="icon-item" />
                  <p>Shopify</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
