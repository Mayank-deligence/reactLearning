import { useReducer } from "react";

const initialInputstate = {
  value: "",
  isTouched: false,
};
const inputSateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return {value:action.value,isTouched:state.isTouched}
    }
    if(action.type === 'BLUR'){
        return {isTouched:true ,value:state.value}
    }
    if(action.type === 'RESET'){
        return {isTouched:false,value:''}
    }
  return inputSateReducer;
};

const useInput = (validateValue) => {
  const [inputstate, dispatch] = useReducer(
    inputSateReducer,
    initialInputstate
  );

  const valueIsValid = validateValue(inputstate.value);
  const hasError = !valueIsValid && inputstate.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR",});
  };
  const reset = () => {
    dispatch({type:'RESET'})
  };
  return {
    value: inputstate.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
