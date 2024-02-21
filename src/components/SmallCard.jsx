import React from "react";
import PropTypes from "prop-types";

export default function SmallCard({ dayTime, img, min, max, temp }) {
    return (
        <div className="bg-darkblue py-4 px-5 flex flex-col items-center space-y-4">
            <p>{dayTime}</p>
            <img
                src={`/images/${img}.png`}
                alt="weather-icon"
                className="max-h-16"
            />
            <div className="flex justify-between space-x-5">
                <p>
                    {max}&deg;{temp}
                </p>
                <p className="text-gray-250">
                    {min}&deg;{temp}
                </p>
            </div>
        </div>
    );
}


SmallCard.prototype = {
    dayTime: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired
};

