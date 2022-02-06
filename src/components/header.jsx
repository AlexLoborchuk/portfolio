import React, {useState} from "react";
import {Link} from 'react-scroll';
import  '../style/header.css';
import IconPortfolio from "../image/icon_portfolio.png";
import classNames from "classnames";


export const Header =()=>{
     const [activeButton, setActiveButton] = useState('');
     console.log(activeButton);
    return <div className="header">
        <div className="name_project"> 
        <img src={IconPortfolio} alt="icon portfolio" className="icon_portfolio"/>
            <span>PORTFOLIO</span>
        </div>
        <ul className="menu">
                <li className="menu_button">
                    <Link className={classNames("menu_text", {["active_button"]: "about_me" === activeButton})} activeClass="active" to="about_me" spy={true} smooth={true} onClick={()=>{setActiveButton('about_me')}}>
                        ABOUT ME
                    </Link>
                </li>
                <li className="menu_button">
                    <Link className={classNames("menu_text", {["active_button"]: "study" === activeButton})} to="study" spy={true} smooth={true} onClick={()=>{setActiveButton('study')}}>
                        STUDY
                    </Link>
                </li>
                <li className="menu_button">
                    <Link className={classNames("menu_text", {["active_button"]: "professionals_skills" === activeButton})} to="professionals_skills" spy={true} smooth={true} onClick={()=>{setActiveButton('professionals_skills')}}>
                        PROFESSIONAL SKILLS
                    </Link>
                </li>
                <li className="menu_button">
                    <Link className={classNames("menu_text", {["active_button"]: "proffessionals_qualities" === activeButton})} to="proffessionals_qualities" spy={true} smooth={true} onClick={()=>{setActiveButton('proffessionals_qualities')}}>
                        PROFESSIONAL QUALITIES
                    </Link>
                </li>
                <li className="menu_button">
                    <Link className={classNames("menu_text", {["active_button"]: "additional_information" === activeButton})} to="additional_information" spy={true} smooth={true} onClick={()=>{setActiveButton('additional_information')}}>
                        ADDITIONAL INFORMATION
                    </Link>
                </li>
                <li className="menu_button">
                    <Link className={classNames("menu_text", {["active_button"]: "my_project" === activeButton})} to="my_project" spy={true} smooth={true} onClick={()=>{setActiveButton('my_project')}}>
                        MY PERSONAL PROJECT
                    </Link>
                </li>
            </ul>    
    </div>
}