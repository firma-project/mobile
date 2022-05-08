import { StyleSheet, Text, View } from 'react-native';

export function Store () {
    return (
        <View style={styles.container}>
            <Text>Store!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  