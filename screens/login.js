import React from 'react'
import { View, Text, TextInput, Image, StyleSheet, Button } from "react-native";
import { Link } from '@react-navigation/native';

export default function Login({ navigation }) {
    const [value, onChangeText] = React.useState('');
    const [password, onChangePass] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    style={styles.tinyLogo}
                    source={require("../assets/logo/image.png")}
                />
            </View>
            <View style={styles.inp}>
                <Text style={styles.tex}>Email</Text>
                <input
                    type="email"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: "white", backgroundColor: "#00001F" }}
                    onChange={e => onChangeText(e.target.value)}
                    placeholder="EnterEmail"
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
            <View style={styles.forgot}>
                <Link to="/forgotpass"> <Text style={styles.tex}> Forgot Password</Text></Link>
            </View >
            <View style={styles.buton}>
                <Button
                    style={styles.btn}
                    onPress={() => navigation.navigate('dashboard')}
                    width="80px"
                    title="Login"
                    color="#5098F2"
                // accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <Text style={styles.tex}>Don't have an account? <Link to='/signup'
            ><Text style={styles.tex}>Create one</Text></Link></Text>
        </View>
    )
}



const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#00001F",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    image: {
        width: "150px",
        height: "150px",
        borderRadius: "100px",
        backgroundColor: "gray",
        border: "2px solid #24244B"
    },
    forgot: {
        width: "240px"
    },
    tinyLogo: {
        width: "100px"
    },
    tex: {
        color: "white",
        opacity: 1,
        font: "Regular 8px / 10px Museo Sans 500",
    },
    inp: {
        width: "240px",
        display: "flex"
    },
    buton: {
        width: "240px",
        height: "40px",

    },
    btn: {
        borderRadius: "25px",

    }
})