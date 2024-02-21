import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  navItem: {
    width: '99%',
    aspectRatio: 5,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  workoutNameText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

const WorkoutPlanItem = ({workoutPlanIndex}) => {
  const navigation = useNavigation();
  const workoutPlans = useSelector(state => state.workoutPlans);
  const workoutPlanData = workoutPlans[workoutPlanIndex];

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('ExercisePlanList', {workoutPlanIndex: workoutPlanIndex})}>
      <View style={styles.navItem}>
        <Text style={styles.workoutNameText}>{workoutPlanData.workoutName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default WorkoutPlanItem;