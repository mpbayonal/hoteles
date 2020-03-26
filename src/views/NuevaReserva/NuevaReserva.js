import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { List, AutoSizer } from 'react-virtualized';
import { useState } from "react";
import Select from "react-dropdown-select";
import HabitacionesLista from "../../components/Habitaciones/HabitacionesLista";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import DateFnsUtils from "@date-io/date-fns";

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import GridContainer from "components/Grid/GridContainer.js";

import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CalendarReservas from "../../components/Calendar/CalendarReservas";
import DropdownMenu from "../../components/dropdownMenu/DropdownMenu";

import avatar from "assets/img/faces/marc.jpg";
import PropTypes from "prop-types";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);



export default function NuevaReserva() {
    const classes = useStyles();
    const [selectedDateEnd, handleDateChangeEnd] = useState(new Date());
    const [selectedDateStart, handleDateChangeInicioStart] = useState(new Date());
    const [habitacionesElegidas,setHabitacionesElegidas] = useState([{
        "id" :-1,
        "index": 0,
        "tipo":"",
        "nombre" : "",
        "costo": -1,
        "numeroAdultos":1,
        "numeroNinos": 0,
        "numeroCamasDobles" : -1,
        "numeroCamasSencillas" :-1,
        "descripcion":""
    }])
    const [habitacionesLista,setHabitacionesLista] = useState([])
    const [numeroHabitaciones,setnumeroHabitaciones] = useState(1)
    const [numeroHuespedes,setnumeroHuespedes] = useState(1)


    const [fixedClasses, setFixedClasses] = React.useState("dropdown");

    const handleFixedClick = () => {
        if (fixedClasses === "dropdown") {
            setFixedClasses("dropdown show");
        } else {
            setFixedClasses("dropdown");
        }
    };






    const anadirHabitacion = () => {

        let y = habitacionesElegidas;
if (habitacionesElegidas.length === 0){
    let t = {
        "id" :-1,
        "index": 0,
        "tipo":"",
        "nombre" : "",
        "costo": -1,
        "numeroAdultos":1,
        "numeroNinos": 0,
        "numeroCamasDobles" : -1,
        "numeroCamasSencillas" :-1,
        "descripcion":""
    }
    y.push(t);
}
else{
    let index = habitacionesElegidas.length
    let t = {
        "id" :-1,
        "index": index,
        "tipo":"",
        "nombre" : "",
        "costo": -1,
        "numeroAdultos":1,
        "numeroNinos": 0,
        "numeroCamasDobles" : -1,
        "numeroCamasSencillas" :-1,
        "descripcion":""
    }
    y.push(t);
}



        setHabitacionesElegidas(habitacionesElegidas => y)
        console.log(habitacionesElegidas)
        setnumeroHabitaciones(habitacionesElegidas.length);
        calculoHabitacionesHuespedes()






    };
    const habitacionNino = (index,  numeroNinos) => {

        if( isNaN(numeroNinos)){
            let t = habitacionesElegidas;
            t[index].numeroNinos = 0;
            setHabitacionesElegidas(t);
            calculoHabitacionesHuespedes()
        }
        else {
            let t = habitacionesElegidas;
            t[index].numeroNinos = numeroNinos;
            setHabitacionesElegidas(t);
            calculoHabitacionesHuespedes()

        }




    };

    const calculoHabitacionesHuespedes = () => {
        let pnumeroHuespedes=0;

    let t =0
    while(t < habitacionesElegidas.length){
        pnumeroHuespedes = pnumeroHuespedes + habitacionesElegidas[t].numeroNinos + habitacionesElegidas[t].numeroAdultos;
        t++;

    }

        setnumeroHabitaciones(habitacionesElegidas.length);
        setnumeroHuespedes(pnumeroHuespedes);


    };

const borrar0 = async (index) => {
    await setHabitacionesElegidas([]);
    console.log(habitacionesElegidas)

}

    const borrar = (index) => {
        console.log(index)
        let removed = []



        let t = 0
        while(t < habitacionesElegidas.length)
        {
            if(t < index)
            {
            removed.push(habitacionesElegidas[t]);
                setHabitacionesElegidas(removed);

                t++;
            }
            else if(t === index)
            { borrar0()
                t++;
            }
            else if(t > index)
            {
                removed.push(habitacionesElegidas[t])

                console.log(habitacionesElegidas)
                removed[t-1].index = t-1;
                setHabitacionesElegidas(removed);
                t++;
            }


        }





        setHabitacionesElegidas(habitacionesElegidas => removed)

    console.log(habitacionesElegidas)
        calculoHabitacionesHuespedes()


    };


    const habitacionAdulto = (index,  numeroAdulto) => {

       if( isNaN(numeroAdulto)){
           let t = habitacionesElegidas
           t[index].numeroAdultos = 0;
           setHabitacionesElegidas(t);
           calculoHabitacionesHuespedes()
       }
       else{

        let t = habitacionesElegidas
        t[index].numeroAdultos = numeroAdulto;
        setHabitacionesElegidas(t);
        calculoHabitacionesHuespedes()}


    };



    const fechaInicio = useSelector(state => state);
    const fechaFin = useDispatch();
    return (
        <div>


            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>Nueva Reserva</h4>
                            <p className={classes.cardCategoryWhite}>Llene los siguientes datos:</p>
                        </CardHeader>

                        <CardBody>


                            <GridContainer>

                                <GridItem xs={12} sm={12} md={12}>
                                    <p className={classes.description}>
                                        Elegir las fechas
                                    </p>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={6}>




                                    <DropdownMenu
                                        handleFixedClick={handleFixedClick}
                                        fixedClasses={fixedClasses}
                                        habitaciones={habitacionesElegidas }
                                        anadirHabitacion={ anadirHabitacion}
                                        anadirNino = {habitacionNino}
                                        borrar={borrar}
                                        anadirAdulto = {habitacionAdulto}
                                        numeroHabitaciones={numeroHabitaciones}
                                        numeroHuespedes={numeroHuespedes}

                                    />







                                </GridItem>


                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <GridItem xs={12} sm={6} md={3}>

                                    <KeyboardDatePicker
                                        autoOk
                                        margin="normal"
                                        placeholder="2018/10/10"
                                        value={selectedDateStart}
                                        onChange={date => handleDateChangeInicioStart(date)}
                                        format="yyyy/MM/dd"
                                        variant="inline"
                                        inputVariant="outlined"
                                        label="Fecha de Inicio"

                                    />
                            </GridItem>
                                <GridItem xs={12} sm={6} md={3}>
                                <KeyboardDatePicker
                                    autoOk
                                    margin="normal"
                                    placeholder="2018/10/10"
                                    value={selectedDateEnd}
                                    onChange={date => handleDateChangeEnd(date)}
                                    format="yyyy/MM/dd"
                                    variant="inline"
                                    inputVariant="outlined"
                                    label="Fecha final"

                                />

                             </GridItem>









                            </MuiPickersUtilsProvider>





                            </GridContainer>

                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <p className={classes.description}>
                                        Elegir la cantidad de habitaciones y huespedes
                                    </p>
                                </GridItem>


                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                    <HabitacionesLista
                                        habitacionesIndexes={habitacionesElegidas}
                                        habitaciones={ habitacionesLista}

                                    />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={4}>


                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                    <CalendarReservas
                                    />
                                </GridItem>


                            </GridContainer>


                            <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                    <CustomInput
                                        labelText="Company (disabled)"
                                        id="company-disabled"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            disabled: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="Cedula"
                                        id="cedula"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Correo electronico"
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Nombres"
                                        id="nombre"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Apellido"
                                        id="apellido"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Ciudad"
                                        id="ciudad"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Direccion"
                                        id="direccion"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Telefono"
                                        id="telefono"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>

                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Añadir Reserva</Button>
                        </CardFooter>
                    </Card>
                </GridItem>

            </GridContainer>
        </div>
    );
}
