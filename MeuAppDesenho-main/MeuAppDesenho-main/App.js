import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.section1}>

      <View style={styles.gap} />

      <View style={styles.section3} />

      <View style={styles.gap} />

      <View style={styles.section5} />

      <View style={styles.gap} />

      <View style={styles.section7} />

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  section1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    paddingTop: 40,
  },

  gap: {
    flex: 1,
  },

  section3: {
    height: 180,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    marginHorizontal: 15,
    backgroundColor: '#e0e0e0',
  },

  section5: {
    height: 180,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    marginHorizontal: 15,
    backgroundColor: '#e0e0e0',
  },

  section7: {
    height: 60,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    borderTopWidth: 2,
    borderColor: '#000',
    backgroundColor: '#ccc',
  },
});