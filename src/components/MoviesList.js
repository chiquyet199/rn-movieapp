import React from 'react';
import {View, FlatList} from 'react-native';
import {Text, ListItem, Button} from 'react-native-elements';

const MoviesList = ({title, data, loadMore}) => (
  <View>
    <Text h2>{title}</Text>
    <FlatList
      data={data}
      renderItem={({item}) => <ListItem key={item.id} title={item.title} />}
    />
    {loadMore && <Button onPress={loadMore} type="clear" title="Load more" />}
  </View>
);

export default MoviesList;
