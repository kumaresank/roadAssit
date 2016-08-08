import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles';
class Review extends Component {
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
                    <View style={styles.reviewContent}>
                    <View>
                    <Text><Icon name="star-half-full" size={30} color="#900" /></Text>
                    <Text>21 Aug,2016</Text>
                    </View>
                    <View><Text style={styles.wrapText}>Very Bad Service.Delivery boy was so arrogant.He was asking to come his shop collect product for which I have already paid delivery charges.</Text></View>
                    </View>
                    </View>
                }
                />
            </ScrollView>
        )
    }
}

module.exports = Review;