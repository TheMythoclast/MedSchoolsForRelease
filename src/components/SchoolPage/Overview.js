import React from 'react'; 
import ReactMarkdown from 'react-markdown'

export default function Overview(props)
{
    var overview = props.schooldata.overview;
    return(
    <div>
    <h2>General Information</h2><br/>
    
    <b>Mission Statement</b><br/> 
    {overview.mission_statement}<br/> 

    <b>Description</b><br/> 
    {overview.school_description}<br/> 
    
    <b>Year Founded</b><br/> 
    {overview.founded}<br/> 
    
    <b>Students</b><br/> 
    {overview.students}<br/> 
    <br /> 
    <br /> 
    <Finance finance={props.schooldata.finance} /><br /><br />
    <IncomingClass finance={props.schooldata.finance} /> 
    </div>);
}


function Finance(props)
{
    return(
    <div>
    <h2>Financial</h2>
    <div style={ { display: "grid", gridTemplateColumns: "auto auto"}}>
    <div class="grid-item"><b>Out-of-State Tuition</b><br/>
    {props.finance.os_tuition}</div>
    
    <div class="grid-item"><b>Average Graduate Debt </b><br />
    {props.finance.is_tuition}</div>
    
    <div class="grid-item"><b>In-State Tuition </b><br />
    {props.finance.is_tuition}</div>

    <div class="grid-item"><b>Average Financial Aid Award</b><br />
    {props.finance.is_tuition}</div>
    </div>
    </div>
    )
}


function IncomingClass(props)
{
    return(
    <div>
    <h2>Incoming Class Statistics</h2>
    <div style={ { display: "grid", gridTemplateColumns: "auto auto"}}>
    <div class="grid-item"><b>Average GPA</b><br/>
    {props.finance.os_tuition}</div>
    
    <div class="grid-item"><b>% In State</b><br />
    {props.finance.is_tuition}</div>
    
    <div class="grid-item"><b>Average Science-GPA</b><br />
    {props.finance.is_tuition}</div>

    <div class="grid-item"><b>% Out-Of-State</b><br />
    {props.finance.is_tuition}</div>

    <div class="grid-item"><b>Average MCAT</b><br />
    {props.finance.is_tuition}</div>
    </div>
    </div>
    )
}

