import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spiner from './../../../common/Spiner/Spiner';
import MainPage from './';
import { getAllInfoForMainPage } from './../../../redux/store/reducers/mainPage-reducer';
import { setCurrentTab } from '../../../redux/store/reducers/tabs-reducer';

class MainPageContainer extends Component {

    componentDidMount() {
        // this.props.getAllInfoForMainPage(this.props.token)
    }

    render() {
        return (
            // this.props.isLoading ?
            //     <Spiner />
            //     :
            //     <>
            <MainPage {...this.props} />
            // </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.user.token,
        isLoading: state.mainPage.isLoading,
        appealList: state.mainPage.appealListData,
        userData: state.mainPage.userData,
        allInfo: state.mainPage.allInfo,
        alarmList: state.mainPage.alarmListData,
        userNameInProfile: state.user.username,
    }
}

export default connect(mapStateToProps, { getAllInfoForMainPage, setCurrentTab })(MainPageContainer)