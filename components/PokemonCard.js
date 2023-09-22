import { StyleSheet, Text, View, Platform, Image } from 'react-native';

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  {
    return (
      <View style={style.card}>
        <View style={style.nameContainer}>
          <Text style={style.name}>{name}</Text>
          <Text style={style.hp}>💗{hp}</Text>
        </View>
        <Image
          source={image}
          style={style.image}
          resizeMode="contain"
          accessibilityLabel={`${name} pokemon`}
        />

        <View>
          <Text>{type}</Text>
        </View>
        <View>
          <Text>moves: {moves.join(', ')}</Text>
        </View>
        <View>
          <Text>Weaknesses: {weaknesses.join(', ')}</Text>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
});
