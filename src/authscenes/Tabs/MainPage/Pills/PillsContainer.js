import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spiner from '../../../../common/Spiner/Spiner';
import Pills from './';
import { getAlarmList } from './../../../../redux/store/reducers/alarm-reducer';

class PillsContainer extends Component {

    componentDidMount() {
        this.props.getAlarmList()
    }

    render() {
        return (
            this.props.isLoading ?
                <Spiner />
                :
                <>
                    <Pills {...this.props} />
                </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.alarm.isLoading,
        alarmList: state.alarm.alarmList,
        userData: state.mainPage.userData
    }
}

export default connect(mapStateToProps, { getAlarmList })(PillsContainer)