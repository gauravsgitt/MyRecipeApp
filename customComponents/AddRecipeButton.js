import { Text, View, TouchableOpacity, Alert } from "react-native";
import styles from "../styles/styles";

const AddRecipeButton = (props) => {
    const title = props.title

    return (
        <View style={styles.myAddRecipeButtonContainerView}>
            <TouchableOpacity style={styles.myAddRecipeButton} onPress={onButtonPress}>
                <Text style={styles.myAddRecipeButtonTitle}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
};

const onButtonPress = () => {
    Alert.alert("Coming soon",
        "Please update the application later",
        [{ text: "Ok", onPress: () => { } }],
        { cancelable: true });
};

export default AddRecipeButton;