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
    aspectRatio: 2,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'rgb(204, 0, 0)',
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 1,
    paddingLeft: 10
  },
  rightContainer: {
    flex: 3,
    flexDirection: 'column'
  },
  exerciseImageContainer: {
    alignSelf: 'center',
    width: '80%',
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 15,
  },
  exerciseNameContainer: {
    flex: 1.5,
    marginTop: 15
  },
  exerciseSetListContainer: {
    flex: 2,
    flexDirection: 'column',
    marginRight: 15
  },
  exerciseRowContainer: {
    flexDirection: 'row',
  },
  exerciseNameText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  setCountContainer: {
    alignSelf: 'left',
    textAlign: 'left',
    flex: 1
  },
  repCountContainer: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1
  },
  weightCountContainer: {
    alignSelf: 'right',
    textAlign: 'right',
  },
  rowText: {
    color: 'white',
  }


});

const ExercisePlanItem = ({workoutPlanIndex, exerciseIndex}) => {
  const workoutPlans = useSelector(state => state.workoutPlans);
  const exercisePlans = workoutPlans[workoutPlanIndex].exercises;
  const exerciseData = exercisePlans[exerciseIndex];
  const setList = exerciseData.setList;
  return (
    <View style={styles.navItem}>

      <View style={styles.leftContainer}>
        <View style={styles.exerciseImageContainer}>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.exerciseNameContainer}>
          <Text style={styles.exerciseNameText}>{exerciseData.exerciseName}</Text>
        </View>

        <View style={styles.exerciseSetListContainer}>

          {setList.map((setRow, index) => {
            return (
              <View style={styles.exerciseRowContainer} key={index}>
                <View style={styles.setCountContainer}>
                  <Text style={styles.rowText}>{setRow.setCount} Sets</Text>
                </View>
                <View style={styles.repCountContainer}>
                  <Text style={styles.rowText}>{setRow.repCount} Reps</Text>
                </View>
                <View style={styles.weightCountContainer}>
                  <Text style={styles.rowText}>{setRow.weight} Kg</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

    </View>
  );
}

export default ExercisePlanItem;