import React, { useState } from 'react'; 
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Source(props)
{
    var hovertext = "This is some example text";
    var statuscolor = ""; 
    var sourcelinks = ""; 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) =>
    {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
      };
    return(
    <div style={{ color: "green"}}>
        <Tooltip ariacontrols="source-menu" title={hovertext} onClick={handleClick}>
        
    <InfoIcon />
    </Tooltip>
    <Menu         
    anchorEl={anchorEl}
    id="simple-menu"
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}>        
    <table><tr><th>Link Text</th><th><ExitToAppIcon/></th></tr></table>
  </Menu>
    </div>);
    //To Do: Exit To App Shouldn't me like a menu, link text should plaintext with the link opening in a new browser when the icon is clicked.
}