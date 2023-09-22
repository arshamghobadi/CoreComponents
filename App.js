import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  const CharmanderData = {
    name: 'Charmander',
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['water', 'Rock'],
  };
  const squirtData = {
    name: 'Squirtle',
    image: require('./assets/squirtle.png'),
    type: 'water',
    hp: 44,
    moves: ['Tackle', 'Water Gunn', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  };
  const bulbasaurData = {
    name: 'Bulbasaur',
    image: require('./assets/bulbasaur.png'),
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  };

  const pikachuData = {
    name: 'Pikachu',
    image: require('./assets/pikachu.png'),
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <PokemonCard {...CharmanderData} />
        <PokemonCard {...squirtData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
