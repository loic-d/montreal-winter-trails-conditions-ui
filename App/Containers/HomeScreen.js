import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/HomeScreenStyle'

export default class HomeScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <Text></Text>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>
          <View style={styles.homeBoxesContainer}>
            <View style={styles.homeBox}>
                <Text style={styles.homeBoxText}>VIEW ALL TRAILS</Text>
            </View>
            <View style={styles.homeBox}>
                <Text style={styles.homeBoxText}>MY FAVORITE TRAILS</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
