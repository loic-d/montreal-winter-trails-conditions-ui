import React from 'react'
import { TouchableOpacity, ListView, ScrollView, Text, Image, View } from 'react-native'
import { Images, Metrics } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Styles
import styles from './Styles/TrailsListScreenStyle'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TrailsListScreen extends React.Component {

  constructor () {
    super();
    this.state = {
      trails: ds.cloneWithRows([])
    }
  }

  componentDidMount() {
    this._fetchTrails();
  }

  _fetchTrails() {
    fetch('http://localhost:8080/api/trailsCondition')
      .then((response) => response.json())
      .then(responseJson => {
        this.setState(
          { trails: ds.cloneWithRows(responseJson.body.Pistes_ski.piste) }
        )
      })
      .catch((error) => {
        console.log(error);
      })
  }

  _renderRow (rowData) {
    const navigateToTrailDetails = () => NavigationActions.trailDetails({trailDetails: {displayName: rowData.nom, id: rowData.id}});

    return (
      <TouchableOpacity onPress={navigateToTrailDetails} style={styles.trailListItem}>
        <View style={styles.trailListTextContainer}>
          <Text style={styles.trailListItemName}>{rowData.nom}</Text>
          <Text style={styles.trailListItemLocation}>{rowData.arrondissement.nom_arr}</Text>
        </View>
        <View style={styles.traiListItemArrowContainer}>
          <Icon name='keyboard-arrow-right' size={Metrics.icons.medium} style={styles.traiListItemArrow}/>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ListView
          contentContainerStyle={styles.trailList}
          dataSource={this.state.trails}
          renderRow={this._renderRow}
          pageSize={15}
        />
      </View>
    )
  }
}
