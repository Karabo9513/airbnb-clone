import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./Banner.css";

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner-info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
            <img
                src="https://images.squarespace-cdn.com/content/v1/5748c1e627d4bdfe229126c6/1589405828459-OD2WO870G3LS97YHXDJA/686cd128-a501-4945-9e81-12bdb7e453e4_Airbnb_OOA_08.jpg"
                alt="Airbnb experience"
                className="banner-image"
            />
        </div>
    );
};

export default Banner;
