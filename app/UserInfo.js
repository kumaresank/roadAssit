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
import Personal from './userInfo/Personal';
import Review from './userInfo/Review';
import Places from './userInfo/Places';
import styles from './Styles';
class UserInfo extends Component {
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
                    <Text style={styles.userText}>Kumaresan K</Text>
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
                <Personal tabLabel="Personal Info" />
                <Review tabLabel="My Rating & Reviews" />
                <Places tabLabel="My Marked Places" />                
            </ScrollableTabView>
            </View>
        )
    }
}

module.exports = UserInfo;