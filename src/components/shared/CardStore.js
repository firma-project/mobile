import heart from '../../../assets/heart.png';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './Card';

export function CardStore({ image, name, price, available, description }) {
  return (
    <Card>
      <View style={styles.productImage}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceValue}>{price}</Text>
        <Image source={heart} style={{ width: 20, height: 20 }} />
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  productImage: {
    flex: 1,
  },
  body: {
    marginBottom: 13,
    flex: 2,
    paddingHorizontal: 20,
  },
  price: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceValue: {
    color: '#F94E6D',
    fontWeight: '600',
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 14,
  },
  description: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8c8c8c',
  },
  image: {
    width: 80,
    height: 80,
    objectFit: 'cover',
  }
});
