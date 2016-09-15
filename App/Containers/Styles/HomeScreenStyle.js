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
  weatherTemperature: {
    fontSize: 75,
    marginBottom: 5,
    color: Colors.seaBlue,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto',
  },
  weatherTemperatureLike: {
    fontSize: 25,
    color: Colors.seaBlue,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto',
  },
  homeBoxesContainer: {
      flex: 0.3,
      flexDirection: 'row',
      marginTop: 2,
      marginBottom: 5
  },
  homeBox: {
      flex: 0.5,
      justifyContent: 'center',
      height: 160,
      backgroundColor: Colors.seaBlue,
      margin: 2,
      padding: 20
  },
  homeBoxText: {
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 35,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto',
    color: Colors.snow
  },
})
