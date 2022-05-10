import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { CardStore } from '../components/shared/CardStore';
import { listProducts } from '../services/firma.service';


const items = [{id:1}, {id: 2}]

const renderItem = ({ item }) => {
    return (
        <CardStore 
   
            image={item.imageUrl}
            name={item.name}
            price={item.price}
            available={item.stock.isAvailable}
            description={item.description}
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
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  