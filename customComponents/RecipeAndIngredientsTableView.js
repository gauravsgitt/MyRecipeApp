import { SectionList, Text, View } from "react-native";
import styles from "../styles/styles";

const RecipeAndIngredientsTableView = () => {

    const demoData = [
        {
            title: 'Breakfast',
            data: ['Pancakes', 'Omelette', 'Fruit Salad'],
        },
        {
            title: 'Lunch',
            data: ['Grilled Chicken', 'Caesar Salad', 'Spaghetti'],
        },
        {
            title: 'Dinner',
            data: ['Steak', 'Mashed Potatoes', 'Vegetable Stir Fry'],
        },
        {
            title: 'Dessert',
            data: ['Chocolate Cake', 'Ice Cream', 'Cheesecake'],
        },
    ];

    return (
        <SectionList
            style={styles.myRecipeAndIngredientsTableView}
            sections={demoData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ section }) => null}
            renderSectionHeader={renderSection}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
        />
    )
};

const renderSection = ({ section }) => (
    <View style={[styles.mySectionContainerView, styles.makeTopLeftAndRightCorner]}>
        <SectionHeaderView title={section.title} />
        {
            section.data.map((item, index) => (
                <SectionContentView showShadow={index === section.data.length - 1} cornerRadius={index === section.data.length - 1} key={index} item={item} />
            ))
        }
    </View>
);

const SectionHeaderView = (props) => {
    const title = props.title

    return (
        <View style={styles.mySectionHeaderContainerView}>
            <Text style={styles.mySectionHeaderText}>{title}</Text>
        </View>
    )
};

const SectionContentView = (props) => {
    const item = props.item
    const cornerRadius = props.cornerRadius
    const showShadow = props.showShadow

    return (
        <View style={[styles.mySectionContentView, cornerRadius && styles.makeBottomLeftAndRightCorner]}>
            <Text style={styles.mySectionContentText}>{item}</Text>
            <View></View>
        </View>
    )
};

export default RecipeAndIngredientsTableView;