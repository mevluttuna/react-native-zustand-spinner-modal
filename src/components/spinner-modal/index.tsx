import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const SpinnerModal = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#FFF" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
})

export default SpinnerModal;