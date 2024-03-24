import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
    return (
        <div class="menu-container">
            <Button
                variant={`${selectedCity == null ? "outline-info" : "info"}`}
                onClick={() => handleCityChange("current")}
            >
                현재 위치
            </Button>

            {cities.map((city) => (
                <Button
                    variant={`${selectedCity == city ? "outline-info" : "info"}`}
                    onClick={() => handleCityChange(city)}
                >
                    {city}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;