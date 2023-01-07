import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Star from "./Star";

const Reviews = props => {
    return (
        <View style={styles.container}>
            <View style={styles.reviewContainer}>
                <Text style={styles.title}>Customer reviews</Text>
                <View style={styles.totalWrap}>
                    <View style={{ flexDirection: "row", }}>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </View>
                    <Text>3 out of 5</Text>
                </View>
                <Text style={styles.amountText}>40 customer ratings</Text>
                <View style={{ flexDirection: "row", top: 10, }}>
                    <View style={styles.progressMiddle}>
                        <View style={styles.progressWrap}>
                            <View style={[styles.progressBar, { width: "60%", },]} /></View>
                    </View>
                    <Text style={styles.progressPercentText}>60%</Text>
                </View>
            </View>



        </View>
    );
};

export default Reviews;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F8FF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: "100%",
        right: 13,
        marginBottom: 10,
        marginTop: 5,
    },
    reviewContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 40,
        minWidth: "80%",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        elevation: 100,
    },
    title: {
        bottom: 20,
        fontWeight: "bold",
        fontSize: 20,
        color: "#000066",
        textAlign: "center",
    },
    totalWrap: {
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: "#F5F8FF",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    amountText: {
        fontSize: 16,
        color: "#595B71",
        textAlign: "center",
        fontWeight: "bold",
    },
    progressPercentText: {
         width: 40, 
         fontSize: 14, 
         color: "#323357" 
    },
    progressMiddle: {
        height: 15,
        flex: 1,
        marginHorizontal: 10,
    },
    progressWrap: {
        backgroundColor: "#F5F8FF",
        borderRadius: 18,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        padding: 2,
    },
    progressBar: {
        flex: 1,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "#ffcc48",
        shadowOpacity: 1.0,
        shadowRadius: 4,
        backgroundColor: "#FFCC48",
        borderRadius: 18,
        minWidth: 5,
    },
});