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

const AddExercisePlanForm = ({workoutPlanIndex}) => {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Add Exercise</Text>
      <Button
        title="Add Test Exercise"
        onPress={() =>
          dispatch({
            type: 'ADD_EXERCISE_PLAN',
            payload: {workoutPlanIndex: workoutPlanIndex,
                      exerciseName: "Test Exercise",
                      setList: [
                        {
                          setCount: 1,
                          repCount: 15,
                          weight: 0
                        },
                        {
                          setCount: 2,
                          repCount: 12,
                          weight: 10
                        }
                      ]
            }
          })
        }
      />
    </View>
  );
}

export default AddExercisePlanForm;