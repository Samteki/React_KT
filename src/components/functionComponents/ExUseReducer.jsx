import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age':
      return {
        ...state, age: state.age + 1
      }
    case 'decriment_age':
      return {
        ...state, age: state.age - 1
      }

    default:
      break;
  }
}

export function ExUseReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <button onClick={() => {
        dispatch({ type: 'decriment_age' })
      }}>
        Decriment age
      </button>
      
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
