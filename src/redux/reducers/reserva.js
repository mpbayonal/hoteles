import {
  FETCH_RESERVAS, FETCH_RESERVAS_SUCCESS, FETCH_RESERVAS_FAILURE, RESET_RESERVAS,
  FETCH_RESERVA, FETCH_RESERVA_SUCCESS,  FETCH_RESERVA_FAILURE, RESET_ACTIVE_RESERVA,
  CREATE_RESERVA, CREATE_RESERVA_SUCCESS, CREATE_RESERVA_FAILURE, RESET_NEW_RESERVA,
  DELETE_RESERVA, DELETE_RESERVA_SUCCESS, DELETE_RESERVA_FAILURE, RESET_DELETED_RESERVA,
  VALIDATE_RESERVA_FIELDS,VALIDATE_RESERVA_FIELDS_SUCCESS, VALIDATE_RESERVA_FIELDS_FAILURE, RESET_RESERVA_FIELDS
} from '../actions/reservaActions';


const INITIAL_STATE = { reservasList: {reservas: [], error:null, loading: false},
  newReserva:{reserva:null, error: null, loading: false},
  activeReserva:{reserva:null, error:null, loading: false},
  deletedReserva: {reserva: null, error:null, loading: false},
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case FETCH_RESERVAS:// start fetching reservas and set loading = true
      return { ...state, reservasList: {reservas:[], error: null, loading: true} };
    case FETCH_RESERVAS_SUCCESS:// return list of reservas and make loading = false
      return { ...state, reservasList: {reservas: action.payload, error:null, loading: false} };
    case FETCH_RESERVAS_FAILURE:// return error and make loading = false
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, reservasList: {reservas: [], error: error, loading: false} };
    case RESET_RESERVAS:// reset reservaList to initial state
      return { ...state, reservasList: {reservas: [], error:null, loading: false} };

    case FETCH_RESERVA:
      return { ...state, activeReserva:{...state.activeReserva, loading: true}};
    case FETCH_RESERVA_SUCCESS:
      return { ...state, activeReserva: {reserva: action.payload, error:null, loading: false}};
    case FETCH_RESERVA_FAILURE:
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return { ...state, activeReserva: {reserva: null, error:error, loading:false}};
    case RESET_ACTIVE_RESERVA:
      return { ...state, activeReserva: {reserva: null, error:null, loading: false}};

    case CREATE_RESERVA:
      return {...state, newReserva: {...state.newReserva, loading: true}}
    case CREATE_RESERVA_SUCCESS:
      return {...state, newReserva: {reserva:action.payload, error:null, loading: false}}
    case CREATE_RESERVA_FAILURE:
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return {...state, newReserva: {reserva:null, error:error, loading: false}}
    case RESET_NEW_RESERVA:
      return {...state,  newReserva:{reserva:null, error:null, loading: false}}


    case DELETE_RESERVA:
      return {...state, deletedReserva: {...state.deletedReserva, loading: true}}
    case DELETE_RESERVA_SUCCESS:
      return {...state, deletedReserva: {reserva:action.payload, error:null, loading: false}}
    case DELETE_RESERVA_FAILURE:
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return {...state, deletedReserva: {reserva:null, error:error, loading: false}}
    case RESET_DELETED_RESERVA:
      return {...state,  deletedReserva:{reserva:null, error:null, loading: false}}

    case VALIDATE_RESERVA_FIELDS:
      return {...state, newReserva:{...state.newReserva, error: null, loading: true}}
    case VALIDATE_RESERVA_FIELDS_SUCCESS:
      return {...state, newReserva:{...state.newReserva, error: null, loading: false}}
    case VALIDATE_RESERVA_FIELDS_FAILURE:
      let result = action.payload;
      if(!result) {
        error = {message: action.payload.message};
      } else {
        error = {title: result.title, categories: result.categories, description: result.description};
      }
      return {...state, newReserva:{...state.newReserva, error: error, loading: false}}
    case RESET_RESERVA_FIELDS:
      return {...state, newReserva:{...state.newReserva, error: null, loading: null}}
    default:
      return state;
  }
}
