import React from "react";
import { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import ClienteTableEditable from "components/ClienteTableEditable/ClienteTableEditable.js";
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

export default function ClienteLista(props) {
  const classes = useStyles();
  let reservasLista = []

  useEffect(() => {
    props.fetchReservas()



  }, []);

  const { reservas, loading, error } = props.reservasList;


  if(loading)
  {
    return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Huespedes</h4>
                <p className={classes.cardCategoryWhite}>
                  Ver la lista de huespedes.
                </p>
              </CardHeader>
              <CardBody>

                <h4 className={classes.cardTitle}>Se estan cargando la lista de los huespedes...</h4>

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
                <h4 className={classes.cardTitleWhite}>Huespedes</h4>
                <p className={classes.cardCategoryWhite}>
                  Ver la lista de huespedes.
                </p>
              </CardHeader>
              <CardBody>

                <h4 className={classes.cardTitle}>Hubo un error cargando la lista de los huespedes. Error:  {error.message}</h4>

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    );

  }
  else {


    let d = 0
    while(d < reservas.length)
    {

      let y = 0
      while(y < reservas[d].pHabitacion.length)
      {
        let reserva = { "id":reservas[d].id, "nombre_Cliente":reservas[d].pCliente.nombre, "idCliente": reservas[d].pCliente.id,
          'habitacion':reservas[d].pHabitacion[y].nombre,
          'habitacion_tipo':reservas[d].pHabitacion[y].tipo,
          'fecha_inicial':reservas[d].fechaInicio,
          'fechaFin':reservas[d].fechaFin


        };

        reservasLista.push(reserva)
        console.log(reservasLista)

      y=y+1;
      }

      d = d+1;
    }



    return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Huespedes</h4>
                <p className={classes.cardCategoryWhite}>
                  Ver la lista de huespedes.
                </p>
              </CardHeader>
              <CardBody>

                <ClienteTableEditable
                    tableHead={[
                      {title: 'Id del Cliente', field: 'id'},
                      {title: 'Nombre', field: 'nombre'},
                      {title: 'Apellido', field: 'apellido'},
                      {title: 'Direccion', field: 'direccion'},
                      {title: 'Telefono', field: 'telefono'},
                      {title: 'Correo Electronico', field: 'email'},
                      {title: 'Pais', field: 'pais'},
                      {title: 'Ciudad', field: 'ciudad'},

                    ]}
                    tableData={reservasLista}
                />

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
    );
  }

}
