import React from "react";
import { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TableEditable from "components/TableEditable/TableEditable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function ReservasLista(props) {
  const classes = useStyles();

  useEffect(() => {
    props.fetchReservas()



  }, []);

  const { reservas, loading, error } = props.reservasList;
  console.log(props)

  if(loading)
  {
    return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Lista de Reservas</h4>
                <p className={classes.cardCategoryWhite}>
                  Ver todas las reservas.
                </p>
              </CardHeader>
              <CardBody>

                <h4 className={classes.cardTitle}>Se estan cargando tus reservas...</h4>

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    );


  }
  else if(error != null){
    return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Lista de Reservas</h4>
                <p className={classes.cardCategoryWhite}>
                  Ver todas las reservas.
                </p>
              </CardHeader>
              <CardBody>

                <h4 className={classes.cardTitle}>Hubo un error cargando tus reservas. Error: {error.message}</h4>

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    );

  }
  else {
    return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Lista de Reservas</h4>
                <p className={classes.cardCategoryWhite}>
                  Ver todas las reservas.
                </p>
              </CardHeader>
              <CardBody>

                <TableEditable
                    tableHead={[
                      {title: 'Id de la Reserva', field: 'idReserva'},
                      {title: 'Nombre del Cliente', field: 'nombre_Cliente'},
                      {title: 'Habitacion', field: 'habitacion'},
                      {title: 'Fecha Inicial', field: 'fecha_inicial', type: 'date'},
                      {title: 'Fecha Fin', field: 'fechaFin', type: 'date'},
                    ]}
                    tableData={[
                      {idReserva: 'Mehmet', nombre_Cliente: 'Baran', habitacion: 1987, fecha_inicial: 63},

                    ]}
                />

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    );
  }

}
