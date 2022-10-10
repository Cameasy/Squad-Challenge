import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image} from 'react-native';
import Title from './components/title';
import styles from './assets/styles';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
     try {
      const response = await fetch('https://632a2846713d41bc8e6b6f53.mockapi.io/api/v1/product');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
    <Title />
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id },) => id}
          renderItem={({ item}) => (
            <View style={styles.items}>

            <Image style={styles.image} source={{uri: item.picture}}/>
            <Text style={styles.itemName}> {item.product_name} </Text>
              <Text style={styles.itemCategory}> {item.category} </Text>
              <Text style={styles.itemPrice}> R${item.price} </Text>
              </View>
          )}
        />
      )}
    </View>
  );
}
