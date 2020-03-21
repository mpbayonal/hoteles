import React, {useEffect} from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import MaterialTable from 'material-table';
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);


export default function ReservasTableEditable(props) {
    const { tableHead, tableData } = props
    const [state, setState] = React.useState({
        columns: tableHead,
        data: tableData,
    });


    return (
        <MaterialTable
            title=""
            columns={state.columns}
            data={state.data}
            localization={{
                grouping : { placeholder : "Arrastra AQUI el campo que quieres agrupar"},

                header: {actions : "Opciones"},

                toolbar : {searchTooltip : "Buscar",
                    searchPlaceholder : "Buscar",
                    nRowsSelected : "{0} elemento(s) seleccionado"},
                body:{
                    emptyDataSourceMessage: "No hay reservas",

                    addTooltip: "Agregar",
                    deleteTooltip: "Borrar",
                    editTooltip: "Editar",

                    editRow:{
                        deleteText: "Esta seguro de borrar esta reserva",
                        cancelTooltip: "Cancelar",
                        saveTooltip: "Aceptar"
                    },
                    filterRow:{
                        filterTooltip: "Filtrar"

                    }

                }
            }}
            options={{
                filtering: true ,
                sorting: true ,
                selection: true,
                grouping: true
            }}
            actions={[
                {
                    tooltip: 'Borrar las reservas seleccionadas',
                    icon: 'delete',
                    onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
                }
            ]}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            props.deleteReserva(oldData.id)
                            setState(prevState => {
                                const data2 = [...prevState.data];
                                const data = data2.filter(function (e) {
                                    console.log(e.id)
                                    return e.id !== oldData.id;
                                });

                                return { ...prevState, data };
                            });
                        }, 600);
                    }),


            }}
        />
    );
}

ReservasTableEditable.defaultProps = {
    tableHeaderColor: "gray"
};

ReservasTableEditable.propTypes = {
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    deleteReserva: PropTypes.func,
    edit: PropTypes.func,
    actualizar : PropTypes.func
};
