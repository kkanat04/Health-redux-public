import React, { Component } from 'react'
import { connect } from 'react-redux';
import Profile from './';
import Spiner from './../../../common/Spiner/Spiner';
import { getAuthUserData, userLogout } from "../../../redux/store/reducers/user-reducer";
import { setCurrentTab } from '../../../redux/store/reducers/tabs-reducer';


class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            // this.props.isLoading ?
            //     <Spiner />
            //     :
            //     <>
            <Profile {...this.props} />
            // </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.user.isLoading,
        username: state.user.username,
        email: state.user.email,
        id: state.user.id
    }
}

export default connect(mapStateToProps, { getAuthUserData, userLogout, setCurrentTab })(ProfileContainer)