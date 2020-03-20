/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import NuevaReserva from "./views/NuevaReserva/NuevaReserva";
import ReservasPage from "./views/Reservas/ReservaListaPage";



import NotificationsPage from "views/Notifications/Notifications.js";

// core components/views for RTL layout


const hotelesRutas = [
  {
    path: "inicio",
    name: "Servicios al cuarto",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/"
  },
  {
    path: "clientes",
    name: "Lista de Clientes",
    icon: Person,
    component: UserProfile,
    layout: "/"
  }
  ,
  {
    path: "reserva",
    name: "Crear Reserva",
    icon: LibraryBooks,
    component: NuevaReserva,
    layout: "/"
  }
  ,
  {
    path: "reservas",
    name: "Lista de Reservas",
    icon: "content_paste",
    component: ReservasPage,
    layout: "/"
  }
];

export default hotelesRutas;
