import React from 'react';
import { useState } from "react";
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function GenderSelect() {
    const [gender, OnChangeGender] = useState('')
    const onClicked = (e, gender) => {
        console.log(e.nativeEvent)
        OnChangeGender(gender)
    }
    return (
        <View>
            <Text style={styles.gender}>Gender</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.icon} onPress={e => onClicked(e, "male")} >
                    {gender === "male" ? <Fontisto name="male" size={24} color="white" />
                        : <Fontisto name="male" size={24} color="gray" />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={e => onClicked(e, "female")}>
                    {gender === "female" ? <Fontisto name="female" size={24} color="white" />
                        : <Fontisto name="female" size={24} color="gray" />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={e => onClicked(e, "other")}>
                    {gender === "other" ? <MaterialCommunityIcons name="cowboy" size={24} color="white" />
                        : <MaterialCommunityIcons name="cowboy" size={24} color="gray" />}
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    gender: {
        color: "white",
        position: "absolute",
        left: "25%",
        top: "-30%",

    },
    tex: {
        color: "white",
        opacity: 1,
        font: "Regular 8px / 10px Museo Sans 500",
    },
    icon: {
        marginLeft: 5,
        padding: 15,
        width: "50px",
        borderRadius: "100px",
        backgroundColor: "#221f3b",

    }
})