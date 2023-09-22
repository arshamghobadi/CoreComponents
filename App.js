import { Platform, StyleSheet, Text, View } from 'react-native';
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
  return (
    <View style={styles.container}>
      <PokemonCard {...CharmanderData} />
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
