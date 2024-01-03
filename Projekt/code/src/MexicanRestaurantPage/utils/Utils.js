import foodData from "../foodItems.json";

export const filterByName = (name) => {
    const newList = foodData.foodItems.filter((item) => item.foodName == name);
    return newList.length ? newList[0] : null;
};

export const filterByQuery = (category) => {
    if (category) {
        const newItemList = foodData.foodItems.filter(
            (foodItem) => foodItem.foodType === category
        );
        return newItemList.length ? newItemList : foodData.foodItems;
    }
    return foodData.foodItems;
};
