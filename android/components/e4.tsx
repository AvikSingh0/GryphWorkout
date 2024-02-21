import * as React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
} from 'react-native';

const image = {uri: 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};

const styles = StyleSheet.create({
  topBar: {
    padding: 18,
    backgroundColor: '#1575eb',
  },
  h1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  h2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  h3: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  p: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
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

function Example() {
  return (
    <View>
      <View style={styles.topBar}>
        <Text style={styles.h3}>Schedule Attraction</Text>
      </View>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.h1}>Riverside Park</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.h2}>Categories</Text>
          <View style={styles.categoryList}>
            <Text style={styles.categoryItem}>Picnic</Text>
            <Text style={styles.categoryItem}>Playground</Text>
            <Text style={styles.categoryItem}>Hiking</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.h2}>Description</Text>
          <Text style={styles.p}>
            Riverside Park is a perfect location to host seasonable events. The Park offers the following: Floral Clock and Rock Gardens; a fully accessible children’s playground; an outdoor concert shell; an antique carousel; miniature train; horseshoe pits; a sand beach area; trails along the river front; 3 baseball diamonds; a scaled model of the first house built in Guelph by John Galt; and a large and small picnic shelter. A leash free zone located on the east side of the Speed River.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.h2}>Address</Text>
          <Text style={styles.p}>
            79 Woolwich St, Guelph.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.h2}>Cost</Text>
          <Text style={styles.p}>
            Free
          </Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Add"
            onPress={() => Alert.alert('Added')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Example;
