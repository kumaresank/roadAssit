import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    ListView
} from 'react-native';
import styles from '../Styles';
class Places extends Component {
    constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Shell Petrol Bunks', 'Saravana Bhavan'
      ])
    }
  }
    render(){
        return(
            <ScrollView style={styles.personalContent}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => 
                    <View style={styles.listItem}>
                    <View style={styles.reviewHeader}>
                    <Text style={styles.reviewTitle}>{rowData}</Text>
                    <View style={styles.reviewActionView}>
                    <Text style={styles.reviewEdit}>Edit</Text>
                    <Text style={styles.reviewDelete}>Delete</Text>
                    </View>
                    </View>
                    <View style={styles.reviewContent}>
                    <View><Text>Pallavaram, Chennai</Text></View>
                    </View>
                    </View>
                }
                />
            </ScrollView>
        )
    }
}

module.exports = Places;