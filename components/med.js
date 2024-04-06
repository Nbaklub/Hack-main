import React from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from "react-native";

const Med = () => {
    return(
        <View style={styles.main}>
            <Text style={styles.data}>Lekarz Pulmonolog</Text>
            <Text style={styles.data}>Ryszard Nowak</Text>
            <Text style={styles.data}>257 477 259</Text>
            <Image style={styles.image}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        width: "100%",
        height: "auto",
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 20,
        backgroundColor: "#e6e6e6"
    },
    data:{
        fontSize: 22,
        padding: 10
    }
})
export {Med};