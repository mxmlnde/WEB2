import React, {useEffect, useState} from "react";
import {filterByName, filterByQuery} from "./utils/Utils";
import {Link, useSearchParams} from "react-router-dom";

const AllFoodItemsPage = () => {

    const [meals, setMeals] = useState([])
    const [query, setQuery] = useSearchParams()

    useEffect(() => {
        const loadedData = filterByQuery(query.get("category"));
        setMeals(loadedData);
        //console.log(loadedData);
        console.log(meals.length)

    }, [query])

    return (
        <div>
            <ul>
                {meals.map((item, idx) => (
                    <Link to={"/meals/" + item.foodName} key={idx}>
                        <li>
                            <span className="foodName">{item.foodName}</span>
                            <span>{item.foodType}</span>
                        </li>
                    </Link>
                ))
                }
            </ul>
        </div>
    );
};

export default AllFoodItemsPage;
