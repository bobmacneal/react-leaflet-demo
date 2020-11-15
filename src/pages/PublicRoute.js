import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router-dom'

const PublicRoute = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
}

export default PublicRoute
