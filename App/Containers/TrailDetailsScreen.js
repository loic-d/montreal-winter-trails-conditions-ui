import React from 'react'
import { TouchableOpacity, ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import appSettings from './../Config/AppSettings'

// I18ns
import I18n from 'react-native-i18n'

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
        );
        console.log('****** STATE ', this.state);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' />
        <View style={styles.container}>
          <View style={styles.trailDetailsContainer}>
            <Text style={styles.trailName}>{this.state.trail_name}</Text>
            <Text style={styles.trailLocation}>{this.state.trail_location}</Text>
            <View style={styles.trailInfoSeparator}></View>
            <View style={styles.trailInfoContainer}>
              <Text style={styles.trailInfoItem}>{I18n.t('trailCondition')} {this.state.trail_condition}</Text>
              <Text style={styles.trailInfoItem}>{I18n.t('trailOpened')} {this.state.trail_opening}</Text>
              <Text style={styles.trailInfoItem}>{I18n.t('trailCleared')} {this.state.trail_clear}</Text>
              <Text style={styles.trailInfoDate}>{I18n.t('trailLastUpdate')} {this.state.trail_update_date}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
