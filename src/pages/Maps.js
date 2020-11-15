import {
  AppBar,
  makeStyles,
  Tab,
  Tabs,
} from '@material-ui/core';
import React, {useState} from 'react';
import { Locations } from '../constants'
import QuickMap from "../components/QuickMap"
import TabPanel from '../components/tabs/TabPanel'

const a11yProps = index => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Maps = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="map tabs"
        >
          <Tab label={Locations.BERLIN.label} {...a11yProps(0)} />
          <Tab label={Locations.COPENHAGEN.label} {...a11yProps(1)} />
          <Tab label={Locations.EDINBURGH.label} {...a11yProps(2)} />
          <Tab label={Locations.MINNEAPOLIS.label} {...a11yProps(3)} />
          <Tab label={Locations.PARIS.label} {...a11yProps(4)} />
          <Tab label={Locations.PIPELINE.label} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <QuickMap location={Locations.BERLIN.gps} zoom={Locations.BERLIN.zoom} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuickMap location={Locations.COPENHAGEN.gps} zoom={Locations.COPENHAGEN.zoom} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <QuickMap location={Locations.EDINBURGH.gps} zoom={Locations.EDINBURGH.zoom} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <QuickMap location={Locations.MINNEAPOLIS.gps} zoom={Locations.MINNEAPOLIS.zoom} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <QuickMap location={Locations.PARIS.gps} zoom={Locations.PARIS.zoom} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <QuickMap location={Locations.PIPELINE.gps} zoom={Locations.PIPELINE.zoom} />
      </TabPanel>
    </div>
  );
}

export default Maps
