import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Modal,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExercisePlanItem from '../components/ExercisePlanItem.jsx';
import AddExercisePlanForm from '../components/AddExercisePlanForm.jsx';
import { useSelector, useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  exerciseListContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 10
  },
  exerciseListRow: {
    gap: 10,
    paddingBottom: 15,
  },
});


const ExercisePlanList = ({navigation, route}) => {
  const {workoutPlanIndex} = route.params;
  const workoutPlans = useSelector(state => state.workoutPlans);
  const exercisePlans = workoutPlans[workoutPlanIndex].exercises;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={styles.exerciseListContainer}>
      <View style={styles.exerciseListRow}>
        {exercisePlans.map((exercisePlan, index) => {
          return (<ExercisePlanItem key={index} workoutPlanIndex={workoutPlanIndex} exerciseIndex={index}></ExercisePlanItem>);
        })}
      </View>

      <View style={styles.exerciseListRow}>
        <Button title="Add Exercise" onPress={toggleModal} />
        <Modal
          visible={isModalVisible}>
          <View>
            <AddExercisePlanForm workoutPlanIndex={workoutPlanIndex}/>
            <View>
              <Button title="Cancel" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

export default ExercisePlanList;
