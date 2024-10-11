import { Image, Text, View } from "react-native";
import styles from "../styles/styles";
import { useEffect } from "react";

const TopView = () => {

    useEffect(() => {
        console.log("TopView mounted...");
        return () => {
            console.log("TopView unmounted...");
        }
    }, []);

    return (
        <View style={styles.myTopViewContainer}>
            <View style={styles.myRecipeImageContainerView}>
                <Image
                    style={styles.myRecipeImage}
                    source={require('../images/recipeLogo.png')}
                />
            </View>
            <View style={styles.myHeadingAndSubHeadingLabelContainerView}>
                <Text style={styles.myRecipeHeadingLabel}>RECIPES</Text>
                <Text style={styles.myRecipeSubHeadingLabel}>Discover, cook, and enjoy delicious recipes at your fingertips!</Text>
            </View>
        </View>
    )
};

export default TopView;