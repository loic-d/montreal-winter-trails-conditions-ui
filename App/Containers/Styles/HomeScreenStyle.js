import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  homeBoxesContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 60,
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
    fontWeight: '300',
    color: 'snow'
  },
})
