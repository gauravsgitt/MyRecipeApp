import { SectionList, Text, View } from "react-native";
import styles from "../styles/styles";

const RecipeAndIngredientsTableView = () => {

    const data = [
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
            sections={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <SectionContentView item={item} />}
            renderSectionHeader={({ section: { title } }) => <SectionHeaderView title={title} />}
        />
    )
};

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

    return (
        <View style={styles.mySectionContentView}>
            <Text style={styles.mySectionContentText}>{item}</Text>
        </View>
    )
};

export default RecipeAndIngredientsTableView;