import React from "react";
import { View, Text, TouchableOpacity, YellowBox } from "react-native";
import useSpinnerStore from "../../store/spinner-modal-store";

const Home = () => {

    const { showSpinner, hideSpinner } = useSpinnerStore()

    const handleShowButtonClick = () => {
        showSpinner()

        setTimeout(() => {
            hideSpinner()
        }, 3000)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={handleShowButtonClick}>
                <Text>Spinner Göster</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;