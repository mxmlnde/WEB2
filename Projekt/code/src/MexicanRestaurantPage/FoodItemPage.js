import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {filterByName} from "./utils/Utils";

const FoodItemPage = () => {

    const [foodItem, setFoodItem] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const newCurrentFoodItem = filterByName(id);
        setFoodItem(newCurrentFoodItem);
    }, [id])

    return (
        <div className="singleMeal">
            {foodItem && (
                <>
                    <h1>{foodItem.foodName}</h1>
                    <p>{foodItem.calories} cal</p>
                    <Link to={"/meals?category=" + foodItem.foodType}>
                        <h2>Show all {foodItem.foodType}</h2>
                    </Link>
                </>
            )}
        </div>
    );
};

export default FoodItemPage;
