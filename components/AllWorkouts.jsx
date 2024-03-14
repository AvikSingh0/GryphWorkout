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
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExercisePlanItem from '../components/ExercisePlanItem.jsx';
import { useSelector, useDispatch } from 'react-redux';

const navStyles = StyleSheet.create({
  navContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 10
  },
  navRow: {
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 10,
    flexWrap: 'wrap'
  },
});

const AllWorkouts = () => {
  const workoutPlans = useSelector(state => state.workoutPlans);


  return (
<ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>All Workouts</Text>
      <View style={styles.settingRow}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Filter clicked')}>
        
            <Icon name="filter" size={24} color="rgba(250, 204, 49, 1)" />
            <Text style={styles.buttonText}>Filters</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Search clicked')}>
            <Icon name="search" size={24} color="rgba(250, 204, 49, 1)" /></TouchableOpacity>
      </View>
      </View>
      <View style={styles.exerciseListRow}>
        {workoutPlans.map((workoutPlan, workoutPlanIndex) => 
          workoutPlan.exercises.map((exercise, exerciseIndex) => (
            <ExercisePlanItem key={`${workoutPlanIndex}-${exerciseIndex}`} workoutPlanIndex={workoutPlanIndex} exerciseIndex={exerciseIndex} />
          ))
        )}
      </View>
    </ScrollView>
  );
}






const styles = StyleSheet.create({

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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },  exerciseListRow: {
    gap: 25,
    paddingBottom: 15,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    paddingHorizontal: 30,
  },
  button: {
     flexDirection: 'row',
    fontSize: 18,
  },
  buttonText: {
    color: 'rgba(250, 204, 49, 1)',
    fontSize :18,
    fontWeight:'bold',
    textAlignVertical : 'center',
    
  },
});






export default AllWorkouts;



