import React from 'react'
import { ListView, ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/TrailsListScreenStyle'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TrailsListScreen extends React.Component {

  constructor () {
    super()
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
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.nom}</Text>
        <Text style={styles.label}>{rowData.condition}</Text>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.trails}
          renderRow={this._renderRow}
          pageSize={15}
        />
      </View>
    )
  }
}
