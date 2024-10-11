import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mySafeAreaView: {
        backgroundColor: '#D4D4CA',
        flex: 1
    },

    myMainContainerView: {
        backgroundColor: '#D4D4CA',
        flex: 1
    },

    myTopViewContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 2
    },

    myRecipeHeadingLabel: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'Roboto',
        width: '90%'
    },

    myRecipeSubHeadingLabel: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'Roboto',
        width: '90%'
    },

    myHeadingAndSubHeadingLabelContainerView: {
        flex: 1,
        flexWrap: 'wrap',
        marginStart: 20,
        marginTop: 25
    },

    myRecipeImageContainerView: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 25,
        marginTop: 25,
        marginBottom: 25,
        ...(Platform.OS === 'ios' && {
            shadowColor: 'gray',
            shadowOffset: { width: 5, height: 7 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
        }),
        ...(Platform.OS === 'android' && {
            elevation: 25,
        })
    },

    myRecipeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: 'gray'
    },

    myRecipeAndIngredientsTableView: {
        marginStart: 25,
        marginEnd: 25
    },

    mySectionContainerView: {
        borderColor: 'gray',
        overflow: 'hidden',
        marginBottom: 15
    },

    mySectionHeaderContainerView: {
        height: 40,
        backgroundColor: '#CACBC3',
        justifyContent: 'center'
    },

    makeBottomLeftAndRightCorner: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },

    makeTopLeftAndRightCorner: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },

    mySectionHeaderText: {
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 20,
        marginStart: 15
    },

    mySectionContentView: {
        backgroundColor: '#E7EAE3',
        padding: 5,
    },

    mySectionContentText: {
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 16,
        marginStart: 10
    },

    myAddRecipeButtonContainerView: {
        flexDirection: 'row-reverse',
        marginStart: 25,
        marginEnd: 25,
        marginBottom: 10
    },

    myAddRecipeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        padding: 8,
        backgroundColor: '#6C8693',
        borderRadius: 12,
        marginEnd: 2
    },

    myAddRecipeButtonTitle: {
        color: '#fff'
    },

    shadowStyle: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5
    }
});

export default styles;