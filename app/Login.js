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
class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
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
                <Image
                    style={styles.logo}
                    source={require('./img/logo.png')}
                />
                <Text style={styles.heading}>
                    LOGIN
                </Text>
                <TextInput
                    onChangeText={ (text)=> this.setState({email: text}) }
                    style={styles.input} placeholder="Email" placeholderTextColor="#FFF">
                </TextInput>
                <TextInput
                    onChangeText={ (text)=> this.setState({password: text}) }
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true} placeholderTextColor="#FFF">
                </TextInput>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableHighlight>
                <View style={styles.links}>
                    <View style={styles.left}>
                    <TouchableHighlight>
                        <Text style={styles.buttonText}>
                            Forgot Password
                        </Text>
                    </TouchableHighlight>
                    </View>
                    <View style={styles.bar}>
                    <Text style={styles.barText}>|</Text>
                    </View>
                    <View style={styles.right}>
                    <TouchableHighlight>
                        <Text style={styles.buttonText}>
                            Sign Up
                        </Text>
                    </TouchableHighlight>
                    </View>
                </View>
                <Image
                    style={styles.footer}
                    source={require('./img/footer.png')}
                />
            </View>
        )
    }
}

module.exports = Login;