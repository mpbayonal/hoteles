import axios from 'axios';

//Reserva list
export const FETCH_RESERVAS = 'FETCH_RESERVAS';
export const FETCH_RESERVAS_SUCCESS = 'FETCH_RESERVAS_SUCCESS';
export const FETCH_RESERVAS_FAILURE = 'FETCH_RESERVAS_FAILURE';
export const RESET_RESERVAS = 'RESET_RESERVAS';

//Create new reserva
export const CREATE_RESERVA = 'CREATE_RESERVA';
export const CREATE_RESERVA_SUCCESS = 'CREATE_RESERVA_SUCCESS';
export const CREATE_RESERVA_FAILURE = 'CREATE_RESERVA_FAILURE';
export const RESET_NEW_RESERVA = 'RESET_NEW_RESERVA';

//Validate reserva fields like Title, Categries on the server
export const VALIDATE_RESERVA_FIELDS = 'VALIDATE_RESERVA_FIELDS';
export const VALIDATE_RESERVA_FIELDS_SUCCESS = 'VALIDATE_RESERVA_FIELDS_SUCCESS';
export const VALIDATE_RESERVA_FIELDS_FAILURE = 'VALIDATE_RESERVA_FIELDS_FAILURE';
export const RESET_RESERVA_FIELDS = 'RESET_RESERVA_FIELDS';

//Fetch reserva
export const FETCH_RESERVA = 'FETCH_RESERVA';
export const FETCH_RESERVA_SUCCESS = 'FETCH_RESERVA_SUCCESS';
export const FETCH_RESERVA_FAILURE = 'FETCH_RESERVA_FAILURE';
export const RESET_ACTIVE_RESERVA = 'RESET_ACTIVE_RESERVA';

//Delete reserva
export const DELETE_RESERVA = 'DELETE_RESERVA';
export const DELETE_RESERVA_SUCCESS = 'DELETE_RESERVA_SUCCESS';
export const DELETE_RESERVA_FAILURE = 'DELETE_RESERVA_FAILURE';
export const RESET_DELETED_RESERVA = 'RESET_DELETED_RESERVA';



const ROOT_URL = 'http://127.0.0.1:8000';
export function fetchReservasStarted() {
  return {
    type: FETCH_RESERVAS
  };
}


export const fetchReservas = () => {
  return dispatch => {
    dispatch(fetchReservasStarted());

    axios
        .get(`${ROOT_URL}/reservas/`)
        .then(res => {
           dispatch(fetchReservasSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchReservasFailure(err));
        });
  };
};

export function fetchReservasSuccess(reservas) {
  return {
    type: FETCH_RESERVAS_SUCCESS,
    payload: reservas
  };
}

export function fetchReservasFailure(error) {
  return {
    type: FETCH_RESERVAS_FAILURE,
    payload: error
  };
}

export function validateReservaFields(props) {
  //note: we cant have /reservas/validateFields because it'll match /reservas/:id path!
  const request = axios.reserva(`${ROOT_URL}/reservas/validate/fields`, props);

  return {
    type: VALIDATE_RESERVA_FIELDS,
    payload: request
  };
}

export function validateReservaFieldsSuccess() {
  return {
    type: VALIDATE_RESERVA_FIELDS_SUCCESS
  };
}

export function validateReservaFieldsFailure(error) {
  return {
    type: VALIDATE_RESERVA_FIELDS_FAILURE,
    payload: error
  };
}

export function resetReservaFields() {
  return {
    type: RESET_RESERVA_FIELDS
  }
}
;


export function createReserva(props, tokenFromStorage) {
  const request = axios({
    method: 'reserva',
    data: props,
    url: `${ROOT_URL}/reservas`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_RESERVA,
    payload: request
  };
}

export function createReservaSuccess(newReserva) {
  return {
    type: CREATE_RESERVA_SUCCESS,
    payload: newReserva
  };
}

export function createReservaFailure(error) {
  return {
    type: CREATE_RESERVA_FAILURE,
    payload: error
  };
}

export function resetNewReserva() {
  return {
    type: RESET_NEW_RESERVA
  }
}
;

export function resetDeletedReserva() {
  return {
    type: RESET_DELETED_RESERVA
  }
}
;

export function fetchReserva(id) {
  const request = axios.get(`${ROOT_URL}/reservas/${id}`);

  return {
    type: FETCH_RESERVA,
    payload: request
  };
}


export function fetchReservaSuccess(activeReserva) {
  return {
    type: FETCH_RESERVA_SUCCESS,
    payload: activeReserva
  };
}

export function fetchReservaFailure(error) {
  return {
    type: FETCH_RESERVA_FAILURE,
    payload: error
  };
}

export function resetActiveReserva() {
  return {
    type: RESET_ACTIVE_RESERVA
  }
}

export const deleteReservas = (id) => {
  return dispatch => {
    dispatch(deleteReservaSarted());

    axios
        .delete(`${ROOT_URL}/reserva/${id}/`)
        .then(res => {
          dispatch(deleteReservaSuccess(res));
        })
        .catch(err => {
          dispatch(deleteReservaFailure(err));
        });
  };
};

export function deleteReservaSarted() {
  return {
    type: DELETE_RESERVA
  };
}

export function deleteReservaSuccess(deletedReserva) {
  return {
    type: DELETE_RESERVA_SUCCESS,
    payload: deletedReserva
  };
}

export function deleteReservaFailure(response) {
  return {
    type: DELETE_RESERVA_FAILURE,
    payload: response
  };
}
