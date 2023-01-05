import React from "react";
import '../skillBar/skillBar.css';

function SkillsBar(){
   return(
       <div className="container">
           <h1 className= "title-text">Skills</h1>

           <div className="skill-box"> 
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tip"> 95% </span>
                   </span>
               </div>
           </div>

           <div className="skill-box"> 
                <span className="title">Css</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tip">80%</span>
                   </span>
               </div>
           </div>

           <div className="skill-box"> 
                <span className="title">javascript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tip">75%</span>
                   </span>
               </div>
           </div>
  
           <div className="skill-box"> 
                <span className="title">React.js</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tip">85%</span>
                   </span>
               </div>
           </div>
  
  
   </div>                  
   )
}

export default SkillsBar
