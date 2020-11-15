import {
  AppBar,
  makeStyles,
  Tab,
  Tabs,
} from '@material-ui/core'
import React, {useState} from 'react'
import { Locations } from '../constants'
import QuickMap from '../components/QuickMap'
import TabPanel from '../components/tabs/TabPanel'

const a11yProps = index => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

const Maps = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar
        color="default"
        position="static"
      >
        <Tabs
          aria-label="map tabs"
          indicatorColor="primary"
          onChange={handleChange}
          scrollButtons="auto"
          textColor="primary"
          value={value}
          variant="scrollable"
        >
          <Tab
            label={Locations.BERLIN.label}
            {...a11yProps(0)}
          />
          <Tab
            label={Locations.COPENHAGEN.label}
            {...a11yProps(1)}
          />
          <Tab
            label={Locations.EDINBURGH.label}
            {...a11yProps(2)}
          />
          <Tab
            label={Locations.MINNEAPOLIS.label}
            {...a11yProps(3)}
          />
          <Tab
            label={Locations.PARIS.label}
            {...a11yProps(4)}
          />
          <Tab
            label={Locations.PIPELINE.label}
            {...a11yProps(5)}
          />
        </Tabs>
      </AppBar>
      <TabPanel
        index={0}
        value={value}
      >
        <QuickMap
          location={Locations.BERLIN.gps}
          zoom={Locations.BERLIN.zoom}
        />
      </TabPanel>
      <TabPanel
        index={1}
        value={value}
      >
        <QuickMap
          location={Locations.COPENHAGEN.gps}
          zoom={Locations.COPENHAGEN.zoom}
        />
      </TabPanel>
      <TabPanel
        index={2}
        value={value}
      >
        <QuickMap
          location={Locations.EDINBURGH.gps}
          zoom={Locations.EDINBURGH.zoom}
        />
      </TabPanel>
      <TabPanel
        index={3}
        value={value}
      >
        <QuickMap
          location={Locations.MINNEAPOLIS.gps}
          zoom={Locations.MINNEAPOLIS.zoom}
        />
      </TabPanel>
      <TabPanel
        index={4}
        value={value}
      >
        <QuickMap
          location={Locations.PARIS.gps}
          zoom={Locations.PARIS.zoom}
        />
      </TabPanel>
      <TabPanel
        index={5}
        value={value}
      >
        <QuickMap
          location={Locations.PIPELINE.gps}
          zoom={Locations.PIPELINE.zoom}
        />
      </TabPanel>
    </div>
  )
}

export default Maps
