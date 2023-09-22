import { StyleSheet, Text, View, Platform, Image } from 'react-native';

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFD700', emoji: '⚡' };
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' };
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' };
    case 'grass':
      return { borderColor: '#66CC66', emoji: '🍀' };
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' };
  }
};
export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  {
    const { borderColor, emoji } = getTypeDetails(type);
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

        <View style={style.typeContainer}>
          <View style={[style.badge, { borderColor }]}>
            <Text style={style.typeEmoji}>{emoji}</Text>
            <Text style={style.typeText}>{type}</Text>
          </View>
        </View>
        <View style={style.movesContainer}>
          <Text style={style.movesText}>M oves: {moves.join(', ')}</Text>
        </View>
        <View style={style.weaknessContainer}>
          <Text style={style.weaknessText}>
            Weaknesses: {weaknesses.join(', ')}
          </Text>
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
  typeContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  weaknessContainer: {
    marginBottom: 16,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
