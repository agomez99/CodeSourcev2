import React from 'react';
import SpacingGrid from '../Components/Grid';
import image2 from "../Components/Navbar/red.png";


const About = () => {
    return(
        <div>
        <div className="aboutlogo">
        <img src={image2} style={{height:200}}/>
        <h1 style={{fontSize:120}}>CodeSource</h1>
        </div>
        <h1 className="about-h">About</h1>
        <SpacingGrid />
      </div>
      );
    };
    
    export default About;