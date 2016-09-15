import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/HomeScreenStyle'

export default class HomeScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' />
        <ScrollView style={styles.container}>
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherTemperature}>-18°</Text>
            <Text style={styles.weatherTemperatureLike}>Feels like -25°</Text>
          </View>
          <View style={styles.homeBoxesContainer}>
            <TouchableOpacity onPress={NavigationActions.trailsList} style={styles.homeBox}>
              <View>
                  <Text style={styles.homeBoxText}>VIEW ALL TRAILS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={NavigationActions.trailsList} style={styles.homeBox}>
              <View>
                  <Text style={styles.homeBoxText}>MY FAVORITE TRAILS</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
