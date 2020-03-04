import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-dropdown-select";
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

import avatar from "assets/img/faces/marc.jpg";

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

    const fechaInicio = useSelector(state => state);
    const fechaFin = useDispatch();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={10}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Nueva Reserva</h4>
                            <p className={classes.cardCategoryWhite}>Elegir las fechas de la reserva.</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <GridItem xs={12} sm={12} md={4}>
                                    <KeyboardDatePicker
                                        autoOk
                                        placeholder="2018/10/10"
                                        value={selectedDateStart}
                                        onChange={date => handleDateChangeInicioStart(date)}
                                        format="yyyy/MM/dd"
                                        variant="inline"
                                        inputVariant="outlined"
                                        label="Fecha de Inicio"

                                    />
                            </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                <KeyboardDatePicker
                                    autoOk
                                    placeholder="2018/10/10"
                                    value={selectedDateEnd}
                                    onChange={date => handleDateChangeEnd(date)}
                                    format="yyyy/MM/dd"
                                    variant="inline"
                                    inputVariant="outlined"
                                    label="Fecha final"

                                />

                             </GridItem>

                                <GridItem xs={12} sm={12} md={4}>
                                    <Select




                                        placeholder="Habitaciones"


                                        clearable={true}
                                        dropdownHandle={true}
                                        searchable={true}
                                        addPlaceholder={"Añadir habitaciones"}
                                        color={"#0074D9"}
                                        multi={true}
                                        dropdownHeight={"500px"}
                                        disabled={false}
                                        searchBy={"this.state.searchBy"}
                                        separator={false}
                                        forceOpen={false}
                                        handle={true}
                                        multi={true}
                                        values={[0,1,1]}
                                        options={[0,1,1]}
                                        onDropdownOpen={() => undefined}
                                        onDropdownClose={() => undefined}
                                        onChange={(values) => this.setValues(values)}
                                        contentRenderer={
                                            false
                                        }
                                        dropdownRenderer={
                                            true
                                        }
                                    />

                                </GridItem>

                            </MuiPickersUtilsProvider>





                            </GridContainer>

                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CalendarReservas
                                    />
                                </GridItem>


                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                                    <CustomInput
                                        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                                        id="about-me"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            multiline: true,
                                            rows: 5
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
