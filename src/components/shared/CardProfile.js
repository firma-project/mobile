import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Card from './Card';
import heart from '../../../assets/heart.png';


export default function CardProfile({ _id, name, email, profileImage }) {
  return (
    <Card>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: profileImage }} />
        <View style={styles.info}>
            <Text style={styles.primary}>{name}</Text>
            <Text style={styles.secondary}>{email}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Image source={heart} style={{ width: 30, height: 30 }} />
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
  primary: {
    fontSize: 18,
    fontWeight: '600'
  },
  secondary: {
    fontSize: 12,
    marginTop: 4,
    color: '#444444',
    fontWeight: '600'
  }
});
