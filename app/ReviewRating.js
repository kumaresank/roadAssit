import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    Image,
    StatusBar
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Rating from './review/Rating';
import Review from './review/Review';
import styles from './Styles';
class ReviewRating extends Component {
    constructor(props) {
    super(props);
    this.state = {
            name: "",
            mobile: "",
            email: "",
            password: "",
            error: "",
            showProgress: false,
    }
  }
    render(){
        return(
            <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.header}>
                <View style={styles.headerActions}>
                    <Image
                        style={styles.back}
                        source={require('./img/back.png')}
                    />
                    <Text style={styles.headerText}>Back to home</Text>
                </View>
                <View style={styles.userView}>
                    <Text style={styles.userText}>Shell</Text>
                </View>
                <View style={styles.tabImage}>
                    <Image
                        source={require('./img/footer.png')}
                    />
                </View>                
            </View>
            <ScrollableTabView
                tabBarUnderlineColor={'#CF3638'}
                tabBarActiveTextColor={'#CF3638'}
                tabBarInActiveTextColor={'gray'}
                style={styles.scrollTab}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}>
                <Rating tabLabel="Ratings" />
                <Review tabLabel="Reviews" />              
            </ScrollableTabView>
            </View>
        )
    }
}

module.exports = ReviewRating;