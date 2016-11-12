import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import appSettings from './../Config/AppSettings'

// Styles
import styles from './Styles/TrailDetailsScreenStyle'

export default class TrailDetailsScreen extends React.Component {

  constructor () {
    super();
    this.state = {
      trail_name: "",
      trail_location: "",
      trail_opening: "",
      trail_condition: "",
      trail_clear: "",
      trail_update_date: ""
    };
  }

  componentDidMount() {
    console.log('props', this.props);
    this._fetchTrailDetails(this.props.trailDetails.id)
  }

  _fetchTrailDetails(trailID) {
    console.log('will fetch for ', trailID);
    fetch(`http://localhost:8080/api/trailsCondition/${trailID}`)
      .then((response) => response.json())
      .then(responseJson => {
        console.log('responseJson', responseJson, 'will set state');
        this.setState(
          {
            trail_name: responseJson['nom'],
            trail_location: responseJson.arrondissement.nom_arr,
            trail_opening: responseJson.ouvert,
            trail_condition: responseJson.condition,
            trail_clear: responseJson.deblaye,
            trail_update_date: responseJson.arrondissement.date_maj
          }
        )
        console.log('****** STATE ', this.state);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text>HELLO TRAIL DETAILS</Text>
        <Text>From ROUTER {this.props.trailDetails.displayName}</Text>
        <Text>{this.state.trail_name}</Text>
        <Text>{this.state.trail_location}</Text>
        <Text>{this.state.trail_update_date}</Text>
        <Text>{this.state.trail_condition}</Text>
        <Text>{this.state.trail_clear}</Text>
        <Text>{this.state.trail_opening}</Text>
      </View>
    )
  }
}
