import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import { CardStore } from '../components/shared/CardStore';
import { listProducts } from '../services/firma.service';



const renderItem = ({ item }) => {
    return (
        <CardStore 
            image={item.imageUrl}
            name={item.name}
            price={item.price}
            listPrice={item.listPrice}
            available={item.stock.isAvailable}
            description={item.description}
            id={item.id}
        />
    )
}

export function Store () {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        listProducts()
            .then(res => setProducts(res.data));
    }, [])

    return (
        <SafeAreaView style={styles.container}>
                  <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    numColumns={2}
                    ItemSeparatorComponent={
                        () => <View style={{ padding: 12 }}/>
                    }
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });
  