const reserva = (state = 1, action) => {
  switch(action.type){
    case "NUEVA_RESERVA":
      return state + 1;
    case "RESERVAS":
      return state - 1;
    default:
      return state;
  }
}

export default reserva;
