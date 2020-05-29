import React from 'react';

function Search({}) {

    return (
        <input className="rounded border text-xs p-2 bg-transparent leading-none" style={{color: '#8E95A5',width: 280,borderColor: '#424754'}} type="text" placeholder="Enter keyword here"/>
    );
}

export { Search };