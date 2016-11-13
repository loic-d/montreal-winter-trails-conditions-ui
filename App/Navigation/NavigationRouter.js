import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// Import the different application screens
import HomeScreen from '../Containers/HomeScreen'
import TrailsListScreen from '../Containers/TrailsListScreen'
import TrailDetailsScreen from '../Containers/TrailDetailsScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='home' component={HomeScreen} title='Winter Trails Conditions' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='trailsList' component={TrailsListScreen} title='All Winter Trails' />
            <Scene key='trailDetails' component={TrailDetailsScreen} title='Trail Details' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
