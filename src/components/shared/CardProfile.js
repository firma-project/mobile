import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Card from './Card';

export default function CardProfile({ _id, name, email, profileImage }) {
  return (
    <Card>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: profileImage }} />
        <View style={styles.info}>
            <Text>{name}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text>Like</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container:  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    width: '98%',
  },
  image: {
    width: 80,
    height: 80,
    objectFit: 'cover',
    borderRadius: '50%',
  },
  info: {
      alignText: 'start',
      flex: 1,
      marginHorizontal: 12,
  },
  button: {
    backgroundColor: '#F94E6D',
  }
});
