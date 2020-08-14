import React from 'react'

import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.image}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View>
                <Text style={styles.tex}>Name</Text>
                <View>
                    <Text style={styles.tex}>40</Text>

                    <Text style={styles.tex}>Points</Text>
                </View>
                <View style={styles.image}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View>

            </View>
            <ScrollView style={styles.scrollView} horizontal={true}>
                <View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View><View style={styles.hrImage}>
                    {/* <Image
                    style={styles.tinyLogo}
                    source={'../assets/icon.png'}
                /> */}
                </View>
            </ScrollView>
            <View style={styles.footer}>

                <MaterialCommunityIcons name="view-dashboard" size={24} color="white" />
                <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
                <MaterialCommunityIcons name="trophy-award" size={24} color="white" />
                <AntDesign name="shoppingcart" size={24} color="white" />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#00001F",

    },
    header: {
        marginTop: 8,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    image: {
        marginTop: "",
        width: "60px",
        height: "60px",
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: "100px"
    },
    footer: {

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    tex: {
        color: "white"
    },
    hrImage: {
        marginTop: "20px",
        marginLeft: "20px",
        width: "80%",
        height: "350px",
        backgroundColor: "white",
        borderRadius: "15px"
    },
    scrollView: {
        height: "400px"
    }

})