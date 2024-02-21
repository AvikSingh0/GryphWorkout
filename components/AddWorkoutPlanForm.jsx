import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const AddWorkoutPlanForm = () => {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Add Workout Plan</Text>
      <TextInput
        placeholder="Enter workout name"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Button title="Add" onPress={() => dispatch({ type: 'ADD_WORKOUT_PLAN', payload: text })}/>
    </View>
  );
}

export default AddWorkoutPlanForm;