import jsonData from '../workoutData.json';

const initialState = JSON.parse(JSON.stringify(jsonData));

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT_PLAN': {
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `workoutPlans` field
        workoutPlans: [
          // with all of the old todos
          ...state.workoutPlans,
          // and the new workout plan
          {
            // Use an auto-incrementing numeric ID for this example
            workoutName: action.payload,
            exercises: []
          }
        ]
      }
    }
    case 'ADD_EXERCISE_PLAN': {
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `workoutPlans` field
        workoutPlans: state.workoutPlans.map((workoutPlan, index) => {
          if (index !== action.payload.workoutPlanIndex) {
            return workoutPlan
          }

          return {
            ...workoutPlan,
            exercises: [
              ...workoutPlan.exercises,
              {
                exerciseName: action.payload.exerciseName,
                setList: action.payload.setList
              }
            ]
          }
        })
      }
    }
    default:
      return state;
  }
};

export default planReducer;