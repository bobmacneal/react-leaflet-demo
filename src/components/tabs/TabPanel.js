import {
  Box,
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const TabPanel = ({ children, index, value, ...other }) => {
  return (
    <Typography
      aria-labelledby={`scrollable-auto-tab-${index}`}
      component="div"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

export default TabPanel
