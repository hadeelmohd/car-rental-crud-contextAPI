import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  cars: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const removeCar = (id) => {
    dispatch({
      type: 'REMOVE_CAR',
      payload: id
    })
  }

  const addCar = (car) => {
    dispatch({
      type: 'ADD_CAR',
      payload: car
    })
  }

  const editCar = (car) => {
    dispatch({
      type: 'EDIT_CAR',
      payload: car
    })
  }

  return (
    <GlobalContext.Provider value={{
      cars: state.cars,
      removeCar,
      addCar,
      editCar
    }}>
      {children}
    </GlobalContext.Provider>
  )
}