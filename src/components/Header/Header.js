import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guestCount, setGuestCount] = useState(1);
    const [showGuestPopup, setShowGuestPopup] = useState(false);
    const popupRef = useRef(null);

    const handleGuestChange = (operation) => {
        setGuestCount((prevCount) => {
            const newCount = operation === "increment" ? prevCount + 1 : prevCount - 1;
            return Math.max(1, Math.min(20, newCount));
        });
    };

    // Handle clicks outside of the guest popup
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowGuestPopup(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <div className="top-header">
                <img
                    src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
                    className="header-logo"
                    alt="Airbnb logo"
                />
                <div className="header-text">
                    <p>Stays</p>
                    <p>Experiences</p>
                </div>
                <div className="header-links">
                    <p>Airbnb your home</p>
                    <LanguageIcon className="language-icon" />
                    <div className="profile-menu-icons">
                        <MenuIcon className="menu-icon" />
                        <AccountCircleIcon className="account-icon" />
                    </div>
                </div>
            </div>
            <div className="banner-search">
                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className="banner-search-button"
                    variant="outlined"
                >
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            {showSearch && (
                <div className="header-bottom">
                    <div className="header-search">
                        <div className="search-where">
                            <p>Where</p>
                            <div className="search-input">
                                <input type="text" placeholder="Search destinations" />
                            </div>
                        </div>
                        <div className="search-checkin">
                            <p>Check In</p>
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => setCheckInDate(date)}
                                placeholderText="Select check-in date"
                                className="date-picker"
                            />
                        </div>
                        <div className="search-checkout">
                            <p>Check Out</p>
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date) => setCheckOutDate(date)}
                                placeholderText="Select check-out date"
                                className="date-picker"
                            />
                            <button className="search-button">Add Dates</button>
                        </div>
                        <div className="search-who">
                            <p>Who</p>
                            <button
                                className="search-button"
                                onClick={() => setShowGuestPopup(!showGuestPopup)}
                            >
                                {guestCount > 1
                                    ? `${guestCount} Guests`
                                    : `${guestCount} Guest`}
                            </button>
                            {showGuestPopup && (
                                <div className="guest-popup" ref={popupRef}>
                                    <div className="guest-selector">
                                        <button
                                            className="guest-button"
                                            onClick={() => handleGuestChange("decrement")}
                                        >
                                            <RemoveIcon />
                                        </button>
                                        <input
                                            type="number"
                                            value={guestCount}
                                            readOnly
                                            className="guest-input"
                                        />
                                        <button
                                            className="guest-button"
                                            onClick={() => handleGuestChange("increment")}
                                        >
                                            <AddIcon />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <SearchIcon />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
