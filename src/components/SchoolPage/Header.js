import React, { useState} from 'react'; 
import ReactDOM from "react-dom";

export default function Header(props)
{
    const [theopacity, setOpacity] = useState(.99);
    const [fadeIn, setFadeIn] = useState(0)
    const animation =  setTimeout(() => { setOpacity(0) } , 1000 );
    const inanimation =  setTimeout(() => { setFadeIn(.99) } , 3000 );

     //ToDo: Come up with a less janky way to implement flashy header.
    return(
    <div>
    <div id="header-container">
    <img src={ "/img/" + props.data.overview.header_images[0]}/> 
    <img style={{ opacity: theopacity, transition: "opacity 1s, ", transitionDelay:  "1.5s"}} src={ "/img/" + props.data.overview.header_images[1]}/>
    <img style={{ opacity: theopacity, transition: "opacity  1s"}} src={ "/img/" + props.data.overview.header_images[2]} /> 
    <img style={{height: "100px",  opacity: fadeIn, transition: "opacity 1s", width: "100px", display: "block", position:"absolute", top: "112px", left: "25px"}} src={"/img/" + props.data.imageurl} />
    
    <div style={{zIndex: 3, opacity: fadeIn * .87, transition: "opacity 1s", background: props.data.schoolcolor,  position: "absolute", width: "50%", height: "auto", maxHeight: "auto", maxWidth: "auto", left:"143px", top: "135px" }}>{props.data.name + " - " + props.data.degreetype}<br/>
    {props.data.city + ", " + props.data.state}
    <br />
    {props.data.school_type + ", " + props.data.campus_type + " Campus" }
    </div>
    </div>

    
    
    </div>);
}