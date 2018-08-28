import React from 'react';
import HotelList from './HotelList';
import HotelListingBanner from './HotelListBanner';

const HotelListing = () => (
  <React.Fragment>
    <HotelListingBanner />
    <HotelList />
  </React.Fragment>
);
export default HotelListing;
