import AddComponent from '../components/AddComponents';
import { addNewTask } from '../actions/index';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskname) => {
            dispatch(addNewTask(inputTaskname));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);