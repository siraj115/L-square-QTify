import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Styles from "./Filters.module.css"
function TabPanel(props) {
  const { children, value, index, ...other } = props;
    //console.log(value, index)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Filters({filters, selectedFilterIndex, setSelectedFilterIndex}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <div>
        <Tabs 
            value={selectedFilterIndex} 
            onChange={handleChange} 
            aria-label="basic tabs example" 
            TabIndicatorProps={{
            style: { backgroundColor: 'var(--color-primary)'},
            }}
        >
            {filters.map((ele,idx)=>(
                <Tab className={Styles.tab} label={ele.label} {...a11yProps(idx)} key={ele.label}/>
            ))}
        </Tabs>
        {
            filters.map((ele,idx)=>(
                <TabPanel value={ele.label} index={idx} key={`${idx}-${ele.label}`}/>       
            ))
        }
    </div>
  );
}

export default Filters;