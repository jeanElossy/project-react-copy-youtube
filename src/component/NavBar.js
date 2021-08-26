import React from 'react';
import { FaBars } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import nav from '../style/NavBar.css';

const  NavBar = () => {
  return (
    <header className="container-fluid">
      <div className="youtube">
        <div>
          <FaBars className="triple"/>
        </div>
        <div>
          <FaYoutube className="youtube__icon" />
          <span className="fw-bold mt-2">YouTube</span> 
        </div>
      </div>
      <div className="myform">
        <form action="/" className="form-group">
          <input type="search" className="form-control"/>
          <button type="button" className="btn btn-light border border-1 "><FaSearch /></button>
        </form>
        <span className="micro"><FaMicrophone /></span>
      </div>
      <div className="d-flex icons__right">
        <BiVideoPlus className="bell"/>
        <BsGrid3X3Gap  className="square"/>
        <BsBell  className="video"/>
        <span><FaUser /></span>
      </div>
    </header>
  )
}

export default NavBar;