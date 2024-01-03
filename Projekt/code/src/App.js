import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MexicanRestaurantPage from "./MexicanRestaurantPage/MexicanRestaurantPage";
import AllFoodItemsPage from "./MexicanRestaurantPage/AllFoodItemsPage";

const App = () => {
    return (
        <MexicanRestaurantPage></MexicanRestaurantPage>
    );
}

export default App;