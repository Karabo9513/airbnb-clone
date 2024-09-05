import React from 'react';
import './SearchPage.css';
import Button from '@mui/material/Button';
import SearchResults from '../SearchResults/SearchResults';

const SearchPage = () => {
  return (
    <div className='search-page'>
      <div className='search-page-info'>
        <p>62 stays - 26 August to 30 August - 2 Guests</p>
        <h1>Stays Nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of Place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and Beds</Button>
        <Button variant='outlined'>More Filters</Button>
      </div>
      <SearchResults
img="https://a0.muscache.com/im/pictures/miso/Hosting-981672375273150727/o
riginal/53959232-c219-4e39-b562-fa2f86d79629.jpeg?im_w=720"

location="Thailand"
title="Neat 2 bedroom unit with pool view"
description="2 beds - wifi - kitchen"

star={4.5}
price="$50 / Night"
total="$500"
/>
    </div>
  );
};

export default SearchPage;
