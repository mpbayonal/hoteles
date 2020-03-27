import React, { Component } from "react";
import classnames from "classnames";
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/Grid/GridContainer.js";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridItem from "components/Grid/GridItem.js";

import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import PropTypes from "prop-types";




class DropdownMenu extends Component {




    constructor(props) {


            super(props);
        this.state = {
            classes: "dropdown show",



        };

        this.handleClick = this.handleClick.bind(this);
        this.anadirHabitacion=this.anadirHabitacion.bind(this);
            this.anadirNino = this.anadirNino.bind(this);
            this.borrar = this.borrar.bind(this);
            this.anadirAdulto= this.anadirAdulto.bind(this);






    }

    handleClick() {

        this.props.handleFixedClick();
    }





    anadirHabitacion(){
        this.props.anadirHabitacion()


    }
    anadirNino(index,nino){
        let numero = parseInt(nino)
        this.props.anadirNino(index,numero)



    }

    anadirAdulto(index, adulto){

        let numero = parseInt(adulto)
        this.props.anadirAdulto(index,numero)


    }

    borrar(index){


        this.props.borrar(index)





    }



    render() {



        return (
            <div
                className={classnames("fixed-plugin")}
            >
                <div id="fixedPluginClasses" className={this.props.fixedClasses}>
                    <div onClick={this.handleClick}>
                        <p>{this.props.numeroHabitaciones} habitacion(es), {this.props.numeroHuespedes} huesped(es)</p>
                    </div>
                    <div className="dropdown-menu">


                        <GridContainer>

                            <GridItem xs={4} sm={4} md={4}>
                                <p>Habitaciones</p>

                            </GridItem>
                            <GridItem xs={4} sm={4} md={4}>
                                <p>Adultos</p>

                            </GridItem>
                            <GridItem xs={4} sm={4} md={4}>
                                <p >Niños</p>

                            </GridItem>
                        </GridContainer>

                            {

                                this.props.habitaciones.map(value => (

                                <GridContainer>

                                    <GridItem xs={4} sm={4} md={4}>
                                        <p>Habitacion {value.index +1 }</p>

                                    </GridItem>

                                    <GridItem xs={4} sm={4} md={4}>
                                        <TextField
                                            size="small"
                                            defaultValue= {1}
                                            variant="outlined"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={e => this.anadirAdulto(value.index, e.target.value)}
                                        />

                                    </GridItem>
                                    <GridItem xs={4} sm={4} md={4}>
                                        <TextField
                                            size="small"
                                            defaultValue= {0}
                                            variant="outlined"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={e => this.anadirNino(value.index, e.target.value)}
                                        />

                                    </GridItem>

                                </GridContainer>

                            ))}



                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                                { this.props.habitaciones.length !== 1 &&
                                <Button variant="outlined" color="primary" onClick={() => this.borrar(this.props.habitaciones.length -1)} >
                                    Borrar Habitación
                                </Button>}
                            </GridItem>

                            <GridItem xs={6} sm={6} md={6}>
                                <Button variant="outlined" color="primary" onClick={() => this.anadirHabitacion()} >
                                    Añadir Habitación
                                </Button>


                            </GridItem>

                        </GridContainer>












                    </div>
                </div>
            </div>
        );


    }
}

DropdownMenu.propTypes = {
    habitaciones: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        tipo: PropTypes.string,
        nombre: PropTypes.string,
        costo: PropTypes.number,
        numeroAdultos:PropTypes.number,
        numeroNinos:PropTypes.number,
        numeroCamasDobles : PropTypes.number,
        numeroCamasSencillas : PropTypes.number,
        descripcion:PropTypes.string
    })).isRequired,
    anadirHabitacion:PropTypes.func,
    anadirNino : PropTypes.func,
    anadirAdulto: PropTypes.func,
    borrar: PropTypes.func,
    numeroHabitaciones: PropTypes.number,
    numeroHuespedes: PropTypes.number
};


export default DropdownMenu;
