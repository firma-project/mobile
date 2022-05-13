import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './Card';

export function CardStore({
  image,
  name,
  price,
  listPrice,
  available,
  description,
  id,
}) {
  const discount =
    listPrice !== price ? (((price - listPrice)/price) * 100) : null;

  return (
    <Card key={id}>
      <View style={styles.productImage}>
        {discount ? (
          <View style={styles.badge}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>{discount}%</Text>
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>OFF</Text>
          </View>
        ) : (
          null
        )}

        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.body}>
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.priceContainer}>
          {discount ? (
            <View style={styles.priceValues}>
              <Text style={{ fontSize: 12, textDecoration: 'line-through', fontFamily: 'roboto' }}>
                R$ {(price / 100).toFixed(2)}
              </Text>
            </View>
          ) : (
            null
          )}

          <View style={styles.priceValues}>
            <Text style={{ fontSize: 12, fontWeight: '600', fontFamily: 'roboto' }}>
              R$ {(listPrice / 100).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  productImage: {
    flex: 4,
  },
  badge: {
    backgroundColor: '#06d6a0',
    position: 'absolute',
    height: 46,
    width: 40,
    right: 10,
    zIndex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative',
  },
  body: {
    flex: 2,
    marginVertical: 2,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  info: {
    flex: 1,
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'roboto'
  },
  priceValues: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8c8c8c',
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30vw',
  },
});
