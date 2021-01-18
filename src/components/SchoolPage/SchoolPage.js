import React from "react";
import Header from "./Header";
import SchoolData from "./../../data/schooldata.json" 
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import TabList from '@material-ui/lab/TabList';
import TabContext from '@material-ui/lab/TabContext';
import { TabPanel } from '@material-ui/lab';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Overview from './Overview';
export default function SchoolPage(props)
{
    var id = props.match.params.id;
    var school = SchoolData[id - 1]; //... did I stutter?
    const [value, setValue] = React.useState('1');
        
 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

const useStyles = makeStyles({
    root: {
        background: school.schoolcolor,
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
})
    const classes = useStyles();


    return(<div>    
        <Header data={school}/>
        <TabContext value={value} className={classes.root} variant="standard">
                <AppBar position="static">
                    <TabList onChange={handleChange} className={classes.root}>
                        <Tab label="Overview" value="1" />
                        <Tab label="Academics" value="2"/>
                        <Tab label="Admissions" value="3" />
                        <Tab label="Contacts" value="4" />
                    </TabList>
                </AppBar>
                <TabPanel value="1"><div><Overview schooldata={school}></Overview></div></TabPanel>
                <TabPanel value="2"><div>Placeholder</div></TabPanel>
                <TabPanel value="3"><div>Placeholder</div></TabPanel>
                <TabPanel value="4"><div>Placeholder</div></TabPanel>
            </TabContext>  
        {id}</div>);
}

