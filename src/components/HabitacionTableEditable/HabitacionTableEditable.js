import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import MaterialTable from 'material-table';
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);


export default function HabitacionTableEditable(props) {
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
                    nRowsSelected : "{0} elemento(s) seleccionado"}
            }}
            options={{
                filtering: true ,
                sorting: true ,
                selection: true,
                grouping: true
            }}
            actions={[
                {
                    tooltip: 'Remove All Selected Users',
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
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}

HabitacionTableEditable.defaultProps = {
    tableHeaderColor: "gray"
};

HabitacionTableEditable.propTypes = {
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
