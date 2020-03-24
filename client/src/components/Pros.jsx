import React from 'react';


const Pros = (props) => (
    <div className="compare-list">
        <div className="pros-title">Pros mentioned</div>
        {props.filters.map((word, index) => (
            <button className="filter-word-btn" key={index}>{word[0]} ({word[1]})</button>
        ))}
    </div>
);

export default Pros