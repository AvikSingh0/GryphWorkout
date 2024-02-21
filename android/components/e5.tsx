import * as React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';

const foodPicUrl = {uri: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/red-sauce-pasta-recipe.jpg'};

const styles = StyleSheet.create({
  recipeContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  topBar: {
    backgroundColor: '#1575eb',
    flex: 0.25,
    justifyContent: 'center',
  },
  foodPic: {
    flex: 0.75,
  },
  foodInfo: {
    flex: 2,
  },
  h1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2: {
    color: 'black',
    fontSize: 24,
  },
  h3: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  p: {
    color: 'black',
    fontSize: 18,
  },
  container: {
    padding: 24,
    marginBottom: 2,
  },
  categoryList: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  categoryItem: {
    borderWidth: 1,
    marginRight: 2,
    backgroundColor: 'white',
  },
  button : {
    alignSelf: 'center',
    width: '15%'
  }
});

function App() {
  return (
    <Recipe/>
  );
}

function Recipe() {
  return (
    <View style={styles.recipeContainer}>
      <View style={styles.topBar}>
        <Text style={styles.h3}>Pasta</Text>
      </View>

      <ImageBackground source={foodPicUrl} style={styles.foodPic}/>

      <View style={styles.foodInfo}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.h1}>Author:</Text>
            <Text style={styles.p}>Ethan</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.h1}>Description:</Text>
            <Text style={styles.p}>This recipe will teach you how to make pasta yourself, using store bought noodles and jarred sauce!</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.h1}>Ingredients:</Text>
            <Text style={styles.p}>1. Pasta Noodles 2. Pasta Sauce 3. Water 4. Salt</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.h1}>Directions:</Text>
            <Text style={styles.p}>1. Gather all ingredients</Text>
            <Text style={styles.p}>2. etc...</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default App;
