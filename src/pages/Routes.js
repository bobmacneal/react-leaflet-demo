import {AppRoutes} from '../constants'
import Home from './Home'
import Layout from '../components/Layout'
import Maps from './Maps'
import PublicRoute from './PublicRoute'
import React from 'react'
import {Switch} from 'react-router-dom'

const Routes = () => {
  return (
    <Switch>
      <PublicRoute
        component={Home}
        exact
        layout={Layout}
        path={AppRoutes.ROOT}
      />
      <PublicRoute
        component={Maps}
        exact
        layout={Layout}
        path={AppRoutes.MAPS}
      />
    </Switch>
  )
}

export default Routes
