const nuevaReserva = () => {
  return {
    type: "NUEVA_RESERVA"
  }
}

const reservas = () => {
  return {
    type: "RESERVAS"
  }
}

export default {
  nuevaReserva,
  reservas
}
