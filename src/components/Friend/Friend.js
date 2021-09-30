import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const{name,phone,website,address}=props.friend
    return (
        <div className="friend">
            <h2>{name}</h2>
            <h4>Call me:{phone}</h4>
            <h4>visit: <a href={website}>{website}</a></h4>
            <h4>visit my home: {address.city}</h4>
            
        </div>
    );
};

export default Friend;