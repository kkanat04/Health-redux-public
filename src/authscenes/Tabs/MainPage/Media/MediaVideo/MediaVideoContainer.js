import React, { Component } from 'react'
import { connect } from 'react-redux';
import MediaVideo from './';
import Spiner from './../../../../../common/Spiner/Spiner';
import { getMediaVideos } from './../../../../../redux/store/reducers/media-reducer';


class MediaVideoContainer extends Component {

    componentDidMount() {
        this.props.getMediaVideos()
    }

    render() {
        return (
            this.props.isLoading ?
                <Spiner />
                :
                <>
                    <MediaVideo {...this.props} />
                </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.media.isLoading,
        videos: state.media.videos
    }
}

export default connect(mapStateToProps, { getMediaVideos })(MediaVideoContainer)