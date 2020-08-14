import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

export default function Verification({ navigation }) {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
            </View>
            <View style={styles.arrow}>
                <Link to="/login"><MaterialIcons name="arrow-back" size={24} color="white" /></Link>
                <Text style={styles.head}>Forgot Password</Text>
            </View>
            <View>
                <Text style={styles.tex}>Give us your registered email address
                    and we'll send you link to reset your password</Text>
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

            <View style={styles.buton}>
                <Button
                    style={styles.btn}
                    // onPress={}
                    onPress={() => navigation.navigate('dashboard')}

                    width="80px"
                    title="Send"
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
                <Link><Text style={styles.login}>Log in</Text></Link>
            </View>
        </View >
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
        // opacity: 1,
        fontSize: "26px",
    },
    inp: {
        alignSelf: "center",
        width: "240px",
        height: "40px",
        display: "flex",
        marginTop: 4
    },
    tex: {
        color: "white",
        fontSize: "10px",
    },
    login: {
        marginLeft: 10,
        color: "white"
    },
    arrow: {
        display: "flex",
        flexDirection: "row",
    },
    singleCode: {
        color: "white",
        width: "20px",
        fontSize: 28,
        borderBottomWidth: 2,
        borderBottomColor: "gray"
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