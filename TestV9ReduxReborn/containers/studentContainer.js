import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectStudent } from '../actions/index';

export default class StudentContainer extends Component {

createStudentList() {
    return this.props.students.map((student) => {
        return (
            <View>
                <View>{student.fullName}</View>
            </View>
        );
    });
}

    render() {
        return (
            <View>
                {this.createStudentList}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        students: state.students,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectStudent: selectStudent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);