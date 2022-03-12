export default (state, action) => {
    switch (action.type) {
      case 'REMOVE_CAR':
        return {
          ...state,
          cars: state.cars.filter(car => {
            return car.id !== action.payload;
          })
        }
      case 'ADD_CAR':
        return {
          ...state,
          cars: [action.payload, ...state.cars]
        }
      case 'EDIT_CAR':
        const updateCar = action.payload;
  
        const updateCars = state.cars.map(car => {
          if (car.id === updateCar.id) {
            return updateCar;
          }
          return car;
        })
        return {
          ...state,
          cars: updateCars
        }
  
      default:
        return state;
    }
  }