import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

export default function Verification({ navigation }) {
    let mail = "zafar@gmail.com";
    const [code0, onChangeCode0] = useState("")
    const [code1, onChangeCode1] = useState("")
    const [code2, onChangeCode2] = useState("")
    const [code3, onChangeCode3] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
            </View>
            <View>
                <View style={styles.verify}>
                    <Link to="/login"> <MaterialIcons name="arrow-back" size={24} color="white" /></Link>
                    <Text style={styles.head}>Verification</Text>
                </View>
                <View>
                    <Text style={styles.tex}>We have sent you a verification code to your email ID {mail}</Text>
                </View>
                <View style={styles.code}>
                    <TextInput style={styles.singleCode} value={code0} maxLength={1} onChangeText={text => onChangeCode0(text)} />
                    <TextInput style={styles.singleCode} value={code1} maxLength={1} onChangeText={text => onChangeCode1(text)} />
                    <TextInput style={styles.singleCode} value={code2} maxLength={1} onChangeText={text => onChangeCode2(text)} />
                    <TextInput style={styles.singleCode} value={code3} maxLength={1} onChangeText={text => onChangeCode3(text)} />

                </View>
                <View style={styles.resend}>

                    <Text style={styles.tex}>Didn't get a code?</Text>
                    <a><Text style={styles.tex}>Tap to resend</Text></a>
                </View>
                <View style={styles.buton}>
                    <Button
                        style={styles.btn}
                        // onPress={}
                        onPress={() => navigation.navigate('dashboard')}

                        width="80px"
                        title="Verify"
                        color="#5098F2"
                    />
                </View>
                <View style={{
                    display: "flex", flexDirection: "row",
                    justifyContent: "center"
                }}>
                    <Text style={styles.login}>
                        Have an account?
                    </Text>
                    <Link to="/login"><Text style={styles.login}>Log in</Text></Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#00001F",

    },
    head: {
        marginLeft: "5px",
        color: "white",
        opacity: 1,
        fontSize: "26px",
    },
    tex: {
        color: "white",
        fontSize: "10px",
    },
    login: {
        marginLeft: 10,
        color: "white"
    },
    verify: {
        display: "flex",
        flexDirection: "row"
    },
    singleCode: {
        color: "white",
        backgroundColor: "#00001F",
        width: "20px",
        fontSize: 28,
        borderBottomWidth: 2,
        borderBottomColor: "gray"
    },
    code: {
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    resend: {
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"

    },
    buton: {
        marginTop: "10px",
        width: "240px",
        height: "40px",
        alignSelf: "center"
    },
    image: {
        marginTop: "",
        width: "100px",
        height: "100px",
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: "100px"
    }
})