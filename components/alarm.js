import React from "react";
import {View, StyleSheet, Image,Text} from "react-native";

const Alarm = () => {
    return(
        <View style={styles.main}>
            <Text style={styles.title}>Numery Alarmowe</Text>
            <Text style={styles.number}>112 - Numer Alarmowy</Text>
            <Text style={styles.number}>999 - Pogotowie Ratunkowe</Text>
            <Text style={styles.number}>998 - Straż Pożarna</Text>
            <Text style={styles.number}>997 - Policja</Text>
            <Text style={styles.number}>994 - Pogotowie Wodociągowe</Text>
            <Text style={styles.number}>993 - Pogotowie Ciepłownicze</Text>
            <Text style={styles.number}>992 - Pogotowie Gazowe</Text>
            <Text style={styles.number}>991 - Pogotowie Energetyczne</Text>
            <Text style={styles.number}>989 - Narodowy Fundusz Zdrowia</Text>
            <Text style={styles.number}>987 - woj. zarządzanie krysysowe</Text>
            <Text style={styles.number}>986 - Straż Miejska</Text>
            <Text style={styles.number}>985 - Ratownictwo Morskie i Górskie</Text>
            <Text style={styles.number}>984 - Pogotowie Rzeczne</Text>
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
    title: {
        fontSize: 22,
        paddingTop: 10,
        fontWeight: 'bold',
        textAlign: "center",
    },
    number:{
        fontSize: 18,
        padding: 10
    }
})
export {Alarm};