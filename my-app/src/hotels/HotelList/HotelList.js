import React, { Component } from 'react';
import { get } from 'api';
import { Card, Size, View, Button, Text, Flex, Space, Tag } from 'ui-kit';
// import Card from 'ui-kit/es/Card';
// import Size from 'ui-kit/es/Size';

export default class HotelList extends Component {
  state={
    hotels: [],
  }

  async componentDidMount() {
    const hotels = await get('http://hotels.com/hotelsInKormangala');
    if (hotels) {
      this.setState({ hotels });
    }
  }

  render() {
    const { hotels } = this.state;
    return (
      hotels.map((hotel) => (
        <Space key={hotel.id} margin={[1, 0, 0, 0]}>
          <Flex flexDirection="column" alignItems="center">
            <View>
              <Size height="170px" width="800px">
                <Space padding={[2]}>
                  <Card shape="sharpEdged" borderColor="grey">
                    <Flex flexDirection="row">
                      <View>
                        <Size height="136px" width="138px">
                          <img alt={hotel.name} src={hotel.thumbnail} />
                        </Size>
                        <Space margin={[0, 0, 0, 2]}>
                          <Flex flexDirection="column" justifyContent="space-between">
                            <View>
                              <View>
                                <Text size="xxl" color="greyDarker" weight="bold">
                                  {hotel.name}
                                </Text>
                                <Text size="s" color="grey">
                                  {hotel.locality}
                                </Text>
                              </View>
                              <Size width="120px">
                                <Tag kind="outlined" color="lagoon">
                                  {hotel.tag}
                                </Tag>
                              </Size>
                            </View>
                          </Flex>
                        </Space>
                        <Flex
                          flexDirection="column"
                          justifyContent="space-between"
                        >
                          <View style={{ marginLeft: 'auto' }}>
                            <View>
                              <Text
                                align="right"
                                color="greyDarker"
                                size="xxl"
                                weight="bold"
                              >
                                {hotel.price}
                              </Text>
                              <Text size="xs" color="grey">
                                Tax incl. price for 1 night
                              </Text>
                            </View>
                            <Button>Quick Book</Button>
                          </View>
                        </Flex>
                      </View>
                    </Flex>
                  </Card>
                </Space>
              </Size>
            </View>
          </Flex>
        </Space>
      ))
    );
  }
}
