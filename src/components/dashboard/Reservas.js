import React, {PropTypes} from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, red300, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';


const Reservas = (props) => {

  const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: red300,
      color: white
    }
  };

  const iconButtonElement = (
    <IconButton
      touch={true}
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>View</MenuItem>
    </IconMenu>
  );

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}>Reservas</Subheader>
        {props.data.map(item =>
          <div key={item.title}>
            <ListItem

              primaryText={item.habitacion}
              secondaryText={item.cliente}

              rightIconButton={rightIconMenu}
            />
            <Divider inset={true} />
          </div>
        )}
      </List>
    </Paper>
  );
};

Reservas.propTypes = {
  data: PropTypes.array
};

export default Reservas;
