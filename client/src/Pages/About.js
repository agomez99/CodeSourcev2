import React from 'react';
import SpacingGrid from '../Components/Grid';
import image2 from "../Components/Navbar/red.png";


const About = () => {
    return(
        <div >
        <div className="aboutlogo">
        <img src={image2} style={{height:50}}/>
        <h1 style={{fontSize:40}}>CodeSource</h1>
        </div>
        <h1 className="about-h">About</h1>
        <p className="aboutP">This site was created for my blogs as a developer and show my path on becoming a full stack developer professionaly</p>
        <SpacingGrid />
      </div>
      );
    };
    
    export default About;