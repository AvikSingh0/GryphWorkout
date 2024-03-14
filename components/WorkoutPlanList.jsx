import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  ScrollView,
  Modal
} from 'react-native';
import WorkoutPlanItem from '../components/WorkoutPlanItem.jsx';
import AddWorkoutPlanForm from '../components/AddWorkoutPlanForm.jsx';
import { useSelector, useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  exerciseListContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 10,

  },
  exerciseListRow: {
    gap: 10,
    paddingBottom: 15,
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
});


const WorkoutPlanList = () => {
  const workoutPlans = useSelector(state => state.workoutPlans)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={styles.exerciseListContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gryph Workout</Text>
      </View>
      <View style={styles.exerciseListRow}>
        {workoutPlans.map((workoutPlan, index) => {
          return (<WorkoutPlanItem key={index} workoutPlanIndex={index}></WorkoutPlanItem>);
        })}
      </View>

      <View style={styles.exerciseListRow}>
        <Button title="Add Workout" onPress={toggleModal} />
        <Modal
          visible={isModalVisible}>
          <View>
            <AddWorkoutPlanForm />
            <View>
              <Button title="Cancel" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

export default WorkoutPlanList;
