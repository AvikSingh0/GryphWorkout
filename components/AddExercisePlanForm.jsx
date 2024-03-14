import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const AddExercisePlanForm = ({workoutPlanIndex}) => {
  const [text, setText] = React.useState('');
  const [exerciseName, setExerciseName] = React.useState('');
  const [setList, setSetList] = React.useState([
    {
    setCount: 0,
    repCount: 0,
    weight: 0,
  },
]);
  const dispatch = useDispatch();
  
  const handleAddSet = () => {
    setSetList([...setList, { setCount: 0, repCount: 0, weight: 0 }]);
  };

  const handleSetChange = (index, setCount, repCount, weight) => {
    const updatedSets = [...setList];
    updatedSets[index] = { setCount, repCount, weight };
    setSetList(updatedSets);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>Add Exercise</Text>
      </View>
      <View style={styles.container2}>
  <View style={styles.inputWithLabel}>
    <Text style={styles.inputLabel}>Name</Text>
    <TextInput
      style={[styles.input, {flex: 1}]} 
      placeholder="Enter exercise name"
      value={exerciseName}
      onChangeText={(text) => setExerciseName(text)}
    />
  </View>
  <TouchableOpacity style={styles.addPhotoButton}>
    <Text style={styles.addPhotoText}>+ Add Photo</Text>
  </TouchableOpacity>

  {setList.map((set, index) => (
    <View key={index} style={styles.setContainer}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Set       "
          value={set.setCount.toString()}
          onChangeText={(text) =>
            handleSetChange(index, parseInt(text), set.repCount, set.weight)
          }
        />
        <Text style={styles.label}>Sets</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Rep      "
          value={set.repCount.toString()}
          onChangeText={(text) =>
            handleSetChange(index, set.setCount, parseInt(text), set.weight)
          }
        />
        <Text style={styles.label}>Reps</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Weight"
          value={set.weight.toString()}
          onChangeText={(text) =>
            handleSetChange(index, set.setCount, set.repCount, parseInt(text))
          }
        />
        <Text style={styles.label}>kg</Text>
      </View>
    </View>
    ))}
      <TouchableOpacity style={styles.button} onPress={handleAddSet}>
        <Text style={styles.buttonText}>Add Set</Text>
      </TouchableOpacity>
       
    <Text style={styles.inputLabel}>Notes:</Text>
    <TextInput
      style={styles.notesInput}
      multiline
      numberOfLines={4} 
      placeholder="Enter notes"
      onChangeText={(text) => {}}
    />
   
      <Button
        title="Add Exercise"
        onPress={() =>
          dispatch({
            type: 'ADD_EXERCISE_PLAN',
            payload: {
              workoutPlanIndex: workoutPlanIndex,
              exerciseName: exerciseName,
              setList: setList,
            },
          })
          
        }
      />
</View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },  
  container2: {
    padding: 20,
  },
  titleContainer: {
    paddingVertical: 22, 
    paddingBottom : 34,
  },


 
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(150, 2, 36, 1)',
    paddingBottom: 10,
    borderBottomWidth: 1,
    
  },
  input: {
    flex: 0,
    minWidth: 50,  
 
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,

    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
  },
  setContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'rgba(250, 204, 49, 1)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 40,
    marginHorizontal:120,
    textAlignVertical:'center',
 
  },
  notesInputbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
 
  },

  inputWithLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  inputLabel: {
    marginRight: 30,  
    fontWeight: 'bold',
    color:'black',
    fontSize:18,
    textAlignVertical: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 10,  
     
  },
  label: {
    marginLeft: 4,
    fontWeight: 'normal',
    color: 'black',
    textAlignVertical: 'center',
    marginBottom:10,
    fontSize:16,
  },
  notesInput: {
    height: 120, 
    borderColor: 'lightgray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    flex: 1,  
  },
  addPhotoButton: {
    backgroundColor: 'lightgray', 
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',  
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100, // Fixed height for the square box
    marginBottom: 20,
    alignSelf:'center',
  },
  addPhotoText: {
    color: 'gray', 
    fontWeight: 'bold',
  },
  
});
export default AddExercisePlanForm;