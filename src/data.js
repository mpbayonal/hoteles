import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const data = {
  menus: [
    { text: 'Inicio', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Nueva Reserva', icon: <Web/>, link: '/form' },
    { text: 'Reservas', icon: <GridOn/>, link: '/table' },
    { text: 'Login', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, habitacion: '305', cliente: 'Carlos Rodriguez', fechaInicio: '2020-01-02',fechaFin: '2020-01-08'},

    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, habitacion: '402', text: 'Podrian traerme la carta porfavor'},
      {id: 2, habitacion: '405', text: 'Podria subir hoy el desayuno a mi habitacion, gracias'}

    ]


  }
};

export default data;
