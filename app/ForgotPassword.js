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
import styles from './Styles';
class ForgotPassword extends Component {
    constructor(props) {
    super(props);
    this.state = {
            email: "",
            error: "",
            showProgress: false,
    }
  }
    render(){
        return(
            <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={{flex: .8,alignItems: 'center'}}>
                <Image
                    style={styles.logo}
                    source={require('./img/logo.png')}
                />
                <Text style={styles.heading}>
                    FORGOT PASSWORD
                </Text>
                <TextInput
                    onChangeText={ (text)=> this.setState({email: text}) }
                    style={styles.input} placeholder="Email" placeholderTextColor="#FFF">
                </TextInput>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>
                        SUBMIT
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[styles.buttonText,{marginTop:10}]}>
                            Login
                    </Text>
                </TouchableHighlight>
                </View>
                <View style={{flex: .2,padding:10,alignItems: 'center'}}>
                <Image style={styles.footer}
                    source={require('./img/footer.png')}
                />
                </View>
            </View>
        )
    }
}

module.exports = ForgotPassword;