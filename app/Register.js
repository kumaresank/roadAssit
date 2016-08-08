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
class Register extends Component {
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
                <Image
                    style={styles.logo}
                    source={require('./img/logo.png')}
                />
                <Text style={styles.heading}>
                    REGISTER
                </Text>
                <TextInput
                    onChangeText={ (text)=> this.setState({name: text}) }
                    style={styles.input} placeholder="Full Name" placeholderTextColor="#FFF">
                </TextInput>
                <TextInput
                    onChangeText={ (text)=> this.setState({mobile: text}) }
                    style={styles.input} placeholder="Mobile Number" placeholderTextColor="#FFF">
                </TextInput>                                
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
                        REGISTER
                    </Text>
                </TouchableHighlight>
                    <TouchableHighlight>
                        <Text style={[styles.buttonText,{marginTop:10}]}>
                            Login
                        </Text>
                    </TouchableHighlight>
                <Image
                    style={styles.footer}
                    source={require('./img/footer.png')}
                />
            </View>
        )
    }
}

module.exports = Register;