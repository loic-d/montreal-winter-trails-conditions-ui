import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'

// For API
import API from '../Services/WeatherDataService'
import FJSON from 'format-json'

// I18ns
import I18n from 'react-native-i18n'

import appSettings from './../Config/AppSettings'

// Styles
import styles from './Styles/HomeScreenStyle'

const { montrealId } = appSettings.API.weatherService;

const endpoint = { label: '', endpoint: 'getCityById', args: [montrealId] };

export default class HomeScreen extends React.Component {

  constructor () {
    super();
    this.state = {
        temp: "",
        temp_min: "",
        temp_min: "",
        humidity: "",
        wind_speed: "",
        city: "Montréal"
    };

    this.api = API.create();
  }

  componentDidMount() {
    this._getWeatherInfo(endpoint)
  }

  setWeatherInfoState (response, title = 'Response') {
    if (response.ok) {
      const { temp, humidity, temp_min, temp_max } = response.data.main;
      const { speed } = response.data.wind;

      temp = temp.toFixed(1);
      temp_min = temp_min.toFixed(1);
      temp_max = temp_max.toFixed(1);

      this.setState(
        {
          temp: temp,
          humidity: humidity,
          temp_min: temp_min,
          temp_max: temp_max,
          wind_speed: speed
        }
      )
    }
  }

  _getWeatherInfo (apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint;
    this.api[endpoint].apply(this, args).then((result) => {
      this.setWeatherInfoState(result, label || `${endpoint}(${args.join(', ')})`)
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' />
        <View style={styles.container}>
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherCity}>{this.state.city}</Text>
            <Text style={styles.weatherTemperature}>{this.state.temp}°C</Text>
            <Text style={styles.weatherTemperatureRange}>{this.state.temp_min}°C {I18n.t('min')} / {this.state.temp_max}°C {I18n.t('max')}</Text>
            <Text style={styles.weatherHumidity}>{this.state.humidity}% {I18n.t('humidity')}</Text>
            <Text style={styles.weatherWindSpeed}>{I18n.t('windSpeed')} {this.state.wind_speed} m/s</Text>
          </View>
          <View style={styles.homeBoxesContainer}>
              <TouchableOpacity onPress={NavigationActions.trailsList} style={styles.homeBoxItem}>
                <View>
                    <Text style={styles.homeBoxText}>{I18n.t('viewAllTrails')}</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
