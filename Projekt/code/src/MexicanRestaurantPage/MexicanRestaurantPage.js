import React from "react";
import AllFoodItemsPage from "./AllFoodItemsPage";
import FoodItemPage from "./FoodItemPage";
import logo from "./image.jpeg";
import "./MexicanRestaurantPage.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const MexicanRestaurantPage = () => {
    return (
        <div>
            <Router>
                <div className="nav">
                    <img src={logo}/>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/meals">All Meals</Link>
                    </div>
                </div>

                <div className="container">
                    {/* All Possible Routes */}
                    <Routes>
                        <Route path="/" element={<h1>Welcome to my Mexican Restaurant</h1>}/>
                        <Route path="/meals" element={<AllFoodItemsPage/>}/>
                        <Route path="/meals/:id" element={<FoodItemPage/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default MexicanRestaurantPage;
