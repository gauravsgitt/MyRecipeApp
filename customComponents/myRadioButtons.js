import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useEffect, useState } from 'react';

const MyRadioButtons = (props) => {
    const [selectedRadio, setSelectedRadio] = useState(0);

    useEffect(() => {
        props.resetSelection && setSelectedRadio(0);
        props.setResetSelection(false);
    });

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity style={{ marginStart: 20, marginEnd: 20 }} onPress={() => setSelectedRadio(1)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ borderColor: 'black', borderWidth: 1, width: 10, height: 10, borderRadius: 5, backgroundColor: selectedRadio === 1 ? 'black' : 'transparent' }}></View>
                    <Text style={{ paddingStart: 10 }}>Radio 1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginStart: 20, marginEnd: 20 }} onPress={() => setSelectedRadio(2)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ borderColor: 'black', borderWidth: 1, width: 10, height: 10, borderRadius: 5, backgroundColor: selectedRadio === 2 ? 'black' : 'transparent' }}></View>
                    <Text style={{ paddingStart: 10 }}>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default MyRadioButtons;