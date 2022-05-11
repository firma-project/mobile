import { View, StyleSheet } from 'react-native';

export default function Card (props) {
    return (
        <View style={[styles.card, styles.shadowProp]}>
                { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 45,
      paddingHorizontal: 4,
      width: '98vw',
      marginVertical: 10,
      flexDirection: 'row',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
  });
  