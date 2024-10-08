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
        fontSize: 40,
        fontFamily: 'Roboto',
        width: '90%'
    },

    myRecipeSubHeadingLabel: {
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
        shadowColor: 'gray',
        shadowOffset: { width: 5, height: 7 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5
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

    mySectionHeaderContainerView: {
        marginTop: 20,
        height: 40,
        backgroundColor: '#CACBC3',
        justifyContent: 'center',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },

    mySectionHeaderText: {
        fontFamily: 'Arial',
        fontSize: 20,
        marginStart: 15
    },

    mySectionContentView: {
        backgroundColor: '#E7EAE3',
        padding: 5,
        shadowColor: 'gray',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5
    },

    mySectionContentText: {
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
    }
});

export default styles;