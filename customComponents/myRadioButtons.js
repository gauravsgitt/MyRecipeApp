import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useEffect, useState } from 'react';

const MyRadioButtons = (props) => {
    const title = props.title
    const index = props.index

    useEffect(() => {
        props.resetSelection && props.setSelectedRadio(0);
        props.setResetSelection(false);
    });

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity style={{ marginStart: 20, marginEnd: 20 }} onPress={() => props.setSelectedRadio(index + 1)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ borderColor: 'black', borderWidth: 1, width: 10, height: 10, borderRadius: 5, backgroundColor: props.selectedRadio === (index + 1) ? 'black' : 'transparent' }}></View>
                    <Text style={{ paddingStart: 10 }}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default MyRadioButtons;