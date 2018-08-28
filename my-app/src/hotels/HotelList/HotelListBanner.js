import React from 'react';
import { Size, View, Position, Text } from 'ui-kit';

const HotelListBanner = () => (
  <View>
    <Size width="100%" height="290px">
      <img
        alt="banner"
        style={{ filter: 'brightness(0.5)' }}
        src="https://s3-ap-southeast-1.amazonaws.com/treebo-blog/images/City+banner+Image.png?fm=pjpg&auto=compress"
      />
    </Size>
    {/* <Position position="absolute" top="20px" left="80px">
      <img
        alt="logo"
        width="100"
        height="42"
        src="https://static.treebo.com/hotrod/build/client/images/logo-white.c690b2df.svg"
      />
    </Position> */}
    <Position position="absolute" top="150px" left="40%">
      <Text color="white" size="xxxxl" weight="bold">
        Hotels in Bangalore
      </Text>
    </Position>
  </View>
);

export default HotelListBanner;
