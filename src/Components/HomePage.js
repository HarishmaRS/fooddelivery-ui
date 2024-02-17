import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TheHeader from "./TheHeader";

const Homepage = () => {
    return (
        <div>
            <TheHeader backgroundColor= "red" visibility="hidden"/>
            <img src="assets/lunch.jpg" width="100%" height="550px" alt="HomepageImage"/>
            <div className="home-section">
                <div className="home-logo">e!</div>
                <div className="title m-3">Find the best restaurants, cafes, and bars</div>
                <div className="inputbox mb-3">
                    <select className="locationBox">
                        <option>bangalore</option>
                        <option>Kochi</option>
                        <option>Chennai</option>
                        <option>Coimbatore</option>
                        <option>Trivandrum</option>
                    </select>
                </div>
                <span className="searchBox m-2">
                    <input type="search" className="ps-2" placeholder="search for restaurants"/>
                </span>
            </div>
        </div>
    )
}
export default Homepage;