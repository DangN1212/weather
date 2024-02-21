import React from "react";
import PropTypes from "prop-types";

LargeCard.prototype = {
    title: PropTypes.string.isRequired,
    nums: PropTypes.number,
    desc: PropTypes.string
};
export default function LargeCard({ title, num, desc, children }) {
    return (
        <div className="bg-darkblue py-7 px-10 flex flex-col items-center justify-between space-y-4">
            <p>{title}</p>
            <h2 className="text-6xl font-bold">
                {num}
                <span className="text-4xl font-normal">{desc}</span>
            </h2>
            {children}
        </div>
    );
}
