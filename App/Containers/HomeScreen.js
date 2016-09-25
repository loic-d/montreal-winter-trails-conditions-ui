import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// For API
import API from '../Services/WeatherDataService'
import FJSON from 'format-json'

import appSettings from './../Config/AppSettings'

// Styles
import styles from './Styles/HomeScreenStyle'

const { montrealId } = appSettings.API.weatherService;

const endpoint = { label: '', endpoint: 'getCityById', args: [montrealId] }

export default class HomeScreen extends React.Component {

  constructor () {
    super()
    this.state = {
        temp: "",
        temp_min: "",
        temp_min: "",
        humidity: "",
        wind_speed: "",
        city: "Montréal"
    }

    this.api = API.create();
  }

  componentDidMount() {
    this._tryEndpoint(endpoint)
  }

  showResult (response, title = 'Response') {
    if (response.ok) {
      const { temp, humidity, temp_min, temp_max } = response.data.main;
      const { speed } = response.data.wind;

      temp = temp.toFixed(1)
      temp_min = temp_min.toFixed(1)
      temp_max = temp_max.toFixed(1)

      this.setState(
        {
          temp: temp,
          humidity: humidity,
          temp_min: temp_min,
          temp_max: temp_max,
          wind_speed: speed
        }
      )
    } else {
      //TODO: SHOW ERROR
    }
  }

  _tryEndpoint (apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    this.api[endpoint].apply(this, args).then((result) => {
      this.showResult(result, label || `${endpoint}(${args.join(', ')})`)
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' />
        <View style={styles.container}>
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherCity}>{this.state.city}</Text>
            <Text style={styles.weatherTemperature}>{this.state.temp}°</Text>
            <Text style={styles.weatherTemperatureRange}>{this.state.temp_min}° min / {this.state.temp_max}° max</Text>
            <View style={styles.weatherInlineContainer}>
              <Text style={styles.weatherHumidity}>{this.state.humidity}% humidity</Text>
              <Text style={styles.weatherWindSpeed}>Wind speed: {this.state.wind_speed} m/s</Text>
            </View>
          </View>
          <View style={styles.homeBoxesContainer}>
              <TouchableOpacity onPress={NavigationActions.trailsList} style={styles.homeBoxItem}>
                <View>
                    <Text style={styles.homeBoxText}>VIEW ALL TRAILS</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={NavigationActions.trailsList} style={styles.homeBoxItem}>
                <View>
                    <Text style={styles.homeBoxText}>MY FAVORITE TRAILS</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
