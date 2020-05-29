import React from 'react';

function Link({ text }) {

    return (
        <p style={{ color: '#8E95A5' }} className="leading-8 text-sm mx-3 cursor-pointer py-1 px-2 hover:bg-gray-800">{text}</p>
    );
}

export { Link };