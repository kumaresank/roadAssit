import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import styles from '../Styles';
class Personal extends Component {
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
            <ScrollView style={styles.personalContent}>
                <Text style={styles.personalText}>First Name</Text>
                <TextInput
                    onChangeText={ (text)=> this.setState({name: text}) }
                    style={styles.personalInput}>
                </TextInput>
                <Text style={styles.personalText}>Mobile Number</Text>
                <TextInput
                    onChangeText={ (text)=> this.setState({mobile: text}) }
                    style={styles.personalInput}>
                </TextInput>           
                <Text style={styles.personalText}>Email</Text>                     
                <TextInput
                    onChangeText={ (text)=> this.setState({email: text}) }
                    style={styles.personalInput}>
                </TextInput>
                <Text style={styles.personalText}>Password</Text>
                <TextInput
                    onChangeText={ (text)=> this.setState({password: text}) }
                    style={styles.personalInput}
                    secureTextEntry={true}>
                </TextInput>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>
                        Save
                    </Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }
}

module.exports = Personal;