import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Image} from 'react-native';

const BASE_URI = 'https://source.unsplash.com/random?sig=';

const App = () => {
  const [data, setDate] = useState([]);
  useEffect(() => {
    fetchMore();
  }, []);
  const fetchMore = () => {
    setDate(prevState => [
      ...prevState,
      ...Array.from({length: 20}).map((_, i) => i + 1 + prevState.length),
    ]);
  };
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        style={styles.list}
        numColumns={3}
        onEndReached={fetchMore}
        keyExtractor={e => e}
        renderItem={({item}) => (
          <Image source={{uri: BASE_URI + item}} style={styles.item} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});

export default App;
