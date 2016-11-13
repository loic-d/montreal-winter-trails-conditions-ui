import { Platform, StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  trailDetailsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 2,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    alignItems: 'center',
    backgroundColor: Colors.ricePaperWhiter
  },
  trailName: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 25,
    marginBottom: 15,
    color: Colors.seaBlue,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto'
  },
  trailLocation: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto',
    color: Colors.charcoal
  },
  trailInfoSeparator: {
    width: 60,
    borderTopWidth: 0.5,
    borderTopColor: Colors.seaBlue,
    marginTop: 30,
    marginBottom: 30
  },
  trailInfoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  trailInfoItem: {
    fontSize: 20,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto',
    marginBottom: 10,
    color: Colors.charcoal
  },
  trailInfoDate: {
    marginTop: 30,
    fontSize: 15,
    fontFamily: (Platform.OS === 'ios') ? 'PingFangHK-Thin' : 'Roboto',
    color: Colors.charcoal
  }
})
