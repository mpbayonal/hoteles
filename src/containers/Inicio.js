import React from 'react';
import Reservas from '../components/dashboard/Reservas';
import Servicio from "../components/dashboard/Servicio";
import globalStyles from '../styles';
import Data from '../data';

const Inicio = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Reservas</h3>





      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <Reservas data={Data.tablePage.items}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <Servicio data={Data.dashBoardPage.recentProducts}/>
        </div>

      </div>
    </div>
  );
};

export default Inicio;
