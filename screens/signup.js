import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import ImagePicker from '../components/imageUpload';
import GenderSelect from '../components/genderSelect';
import { Link } from '@react-navigation/native';

export default function Signup({ navigation }) {

    const [value, onChangeText] = React.useState('');
    const [name, onChangeName] = React.useState('');
    const [password, onChangePass] = React.useState('');
    const [reEnterPassword, onChangeReEnterPass] = React.useState('');

    return (
        <View style={styles.container}>
            <ImagePicker />
            <GenderSelect />
            <View>
                <View style={styles.inp}>
                    <Text style={styles.tex}>Username</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: "white" }}
                        onChangeText={text => onChangeName(text)}
                        placeholder="Username"
                        value={name}
                    />
                </View>
                <View style={styles.inp}>
                    <Text style={styles.tex}>Email</Text>
                    <input
                        type="email"
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: "white", backgroundColor: "#00001F" }}
                        onChange={e => onChangeText(e.target.value)}
                        placeholder="Enter Email"
                        value={value}
                    />
                </View>
                <View style={styles.inp}>
                    <Text style={styles.tex}>PassWord</Text>
                    <input
                        type="password"
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: "white", backgroundColor: "#00001F" }}
                        onChange={e => onChangePass(e.target.value)}
                        placeholder="Enter Password"
                        value={password}
                    />
                </View>

                <View style={styles.inp}>
                    <Text style={styles.tex}>Confirm PassWord</Text>
                    <input
                        type="password"
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: "white", backgroundColor: "#00001F" }}
                        onChange={e => onChangeReEnterPass(e.target.value)}
                        placeholder="Re-Enter Password"
                        value={reEnterPassword}
                    />
                </View>
                <View style={styles.buton}>
                    <Button
                        style={styles.btn}
                        onPress={() => navigation.navigate('verify')}

                        width="80px"
                        title="Signup"
                        color="#5098F2"
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#00001F",
        alignItems: "center"
    },
    tex: {
        color: "white",
        opacity: 1,
        font: "Regular 8px / 10px Museo Sans 500",
    },
    inp: {
        width: "240px",
        height: "50px",
        display: "flex",
        marginTop: 4
    },
    buton: {
        marginTop: "10px",
        width: "240px",
        height: "40px",

    }
})