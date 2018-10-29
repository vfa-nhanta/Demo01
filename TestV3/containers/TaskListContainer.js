import { connect } from 'react-redux';
import TaskListComponent from '../components/TaskListComponent' 

const mapStateToProps = (state) => {
    alert(`state sent to task list: ${JSON.stringify(state)}`);
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
}; 

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;