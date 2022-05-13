import { View, StyleSheet } from 'react-native';

export default function Card (props) {
    return (
        <View style={[styles.card, styles.borderProp]}>
                { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius: 2,
      width: '48vw',
      height: 300,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    borderProp: {
        borderBottomColor: '#c3c3c3',
        borderBottomWidth: 1,
    }
  });
  