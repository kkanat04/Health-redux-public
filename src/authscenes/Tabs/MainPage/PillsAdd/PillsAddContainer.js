import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spiner from '../../../../common/Spiner/Spiner';
import { createAlarm, editAlarm, deleteAlarm } from '../../../../redux/store/reducers/alarm-reducer';
import PillsAdd from './';

class PillsAddContainer extends Component {

    componentDidMount() {
    }

    render() {
        return (
            this.props.isLoading ?
                <Spiner />
                :
                <>
                    <PillsAdd {...this.props} />
                </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.alarm.isLoading,
        alarmList: state.alarm.alarmList
    }
}

export default connect(mapStateToProps, { createAlarm, editAlarm, deleteAlarm })(PillsAddContainer)