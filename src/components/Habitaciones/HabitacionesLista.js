import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";


const useStyles = makeStyles(styles);

export default function Habitaciones(props) {
    const classes = useStyles();

    const { habitaciones, checkedIndexes} = props

    const [state, setState] = React.useState({
        habitacionesLista: habitaciones,
        habitacionesAnadidas: checkedIndexes
    });

    console.log(habitaciones.length)


    const handleToggle = value => {


        setState(prevState => {
            const data2 = [...prevState.habitacionesLista];
            const habitacionesLista = data2.filter(function (e) {
                console.log(e.id)
                return e.id !== value.id;
            });

            const habitacionesAnadidas = [...prevState.habitacionesAnadidas];
            habitacionesAnadidas.push(value)

            return { ...prevState, habitacionesLista , habitacionesAnadidas };
        });

    };
    if(habitaciones.length > 0){

    return (

            <div>
                {state.habitaciones.map(value => (

                            <Card chart>
                                <CardBody>
                                    <p className={classes.cardCategory}>{value.tipo}</p>
                                    <h4 className={classes.cardTitle}>{value.nombre}</h4>
                                    <h2 className={classes.cardTitle}>{value.costo}</h2>

                                </CardBody>
                                <CardFooter chart>

                                        <a href="#pablo" onClick={handleToggle(value)}>
                                            Agregar
                                        </a>
                                </CardFooter>
                            </Card>



                ))}
            </div>

    );}
    else {

        return (

            <div>


                    <Card chart>
                        <CardBody>
                            <p className={classes.cardCategory}>No hay habitaciones </p>

                        </CardBody>

                    </Card>




            </div> );
    }
}


Habitaciones.propTypes = {
    habitaciones: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string,
        tipo: PropTypes.string,
        nombre: PropTypes.string,
        costo: PropTypes.number,
        numeroCamasDobles : PropTypes.number,
        numeroCamasSencillas : PropTypes.number,
        descripcion:PropTypes.string
    })).isRequired,
    habitacionesIndexes: PropTypes.arrayOf(PropTypes.number),
    checkedIndexes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        tipo: PropTypes.string,
        nombre: PropTypes.string,
        costo: PropTypes.number,
        numeroCamasDobles : PropTypes.number,
        numeroCamasSencillas : PropTypes.number,
        descripcion:PropTypes.string
    })).isRequired
}


