import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchReservas, fetchReservasSuccess, fetchReservasFailure } from '../../redux/actions/reservaActions';
import ClienteLista from './ClienteLista';


const mapStateToProps = (state) => {


    return {
        reservasList: state.mainReducer.reserva.reservasList


    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchReservas: () => dispatch(fetchReservas())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClienteLista);
