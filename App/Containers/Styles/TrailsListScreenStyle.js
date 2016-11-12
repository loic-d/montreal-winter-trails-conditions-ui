import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  trailList: {
    //flex: 1,
    //flexDirection: 'column',
    //flexWrap: 'wrap'
  },
  trailListItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    borderBottomColor: Colors.steel,
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    height: 95
  },
  trailListTextContainer: {
    flex:0.9
  },
  trailListItemName: {
    color: Colors.seaBlue,
    fontSize: 16,
    marginBottom: 8
  },
  trailListItemLocation: {
    color: Colors.charcoal,
    fontSize: 13
  },
  traiListItemArrowContainer: {
    flex: 0.1
  },
  traiListItemArrow: {
    color: Colors.seaBlue
  }
})
