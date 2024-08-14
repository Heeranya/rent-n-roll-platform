import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import '../styles/side.css'; // Import the CSS file for the sidebar
import { GrFormView } from "react-icons/gr";
const Side = () => {
  
const navi=useNavigate('');
  return (
    <div className="sidebar">
      <h2>Rent'N Roll</h2>
      <div className='hue'>
      <button  onClick={()=>{navi('/caradd')}}>Add Cars</button>
      <button  onClick={()=>{navi('/carview')}}>View Cars</button>
      <button  onClick={()=>{navi('/caradd')}}>Cars</button>
      <button  onClick={()=>{navi('/caradd')}}>Cars</button>
      </div>
    </div>
  );
};

export default Side;
