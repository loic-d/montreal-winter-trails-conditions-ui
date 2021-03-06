import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  weatherContainer: {
    flex: 0.7,
    justifyContent: 'center',
    margin: 2,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: Colors.ricePaper
  },
  weatherCity: {
    fontSize: 55,
    marginTop: 15,
    marginBottom: 8,
    color: Colors.seaBlue,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto'
  },
  weatherTemperature: {
    fontSize: 75,
    marginBottom: 15,
    color: Colors.seaBlue,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto',
  },
  weatherTemperatureRange: {
    fontSize: 20,
    marginBottom: 8,
    color: Colors.seaBlue,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Regular' : 'Roboto',
  },
  weatherHumidity: {
    fontSize: 18,
    marginBottom: 8,
    color: Colors.seaBlue,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Regular' : 'Roboto',
  },
  weatherWindSpeed: {
    fontSize: 18,
    marginBottom: 8,
    color: Colors.seaBlue,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Regular' : 'Roboto',
  },
  homeBoxesContainer: {
      flex: 0.4,
      flexDirection: 'row',
      marginTop: 1,
      marginBottom: 1,
      alignItems: 'stretch'
  },
  homeBoxItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.seaBlue,
      margin: 1,
      padding: 20
  },
  homeBoxText: {
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 50,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto',
    color: Colors.snow
  }
})
