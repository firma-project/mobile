import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import CardProfile from '../components/shared/CardProfile';
import { listUsers } from '../services/firma.service';


function renderItem ({ item }) {

    return (
        <CardProfile 
            name={item.name}
        />
    )
}

export function User () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        listUsers()
            .then((res) => setUsers(res.data));
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
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
  