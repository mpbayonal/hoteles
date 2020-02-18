import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';

const ReservaForm = () => {

  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="Nueva Reserva"
              navigation="">
      <form>

        <TextField
          hintText="Cliente"
          floatingLabelText="Nombre"
          fullWidth={true}
        />

        <SelectField
          floatingLabelText="Habitacion"
          value=""
          fullWidth={true}>
          <MenuItem key={0} primaryText="habitacion 1"/>
          <MenuItem key={1} primaryText="Habitacion 2"/>
          <MenuItem key={2} primaryText="Habitacion 3"/>
        </SelectField>

        <DatePicker
          hintText="Fecha Inicio"
          floatingLabelText="Fecha Inicio"
          fullWidth={true}/>

        <DatePicker
          hintText="Fecha Fin"
          floatingLabelText="Fecha Fin"
          fullWidth={true}/>





        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel"/>
          </Link>

          <RaisedButton label="Reservar"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>
  );
};

export default ReservaForm;
