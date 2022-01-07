import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Modal } from 'react-native';
import VideoPlayer from 'expo-video-player';
import { setStatusBarHidden } from 'expo-status-bar'
import { Video } from 'expo-av';
import BackIcon from '../../../../../../assets/images/backicon.svg';
import Line from '../../../../../../assets/images/line.svg';

export default function MediaVideo({ navigation, route, videos }) {
    const [inFullscreen2, setInFullsreen2] = useState(false)


    const { mediaId, mediaName } = route.params


    return (
        <View style={styles.main}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={inFullscreen2}
            >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        {videos && videos?.map((el, i) => {
                            return (
                                el.title == mediaId ?
                                    <VideoPlayer
                                        key={i}
                                        videoProps={{
                                            shouldPlay: true,
                                            resizeMode: "contain",
                                            source: {
                                                uri: el.video,
                                            }
                                        }}
                                        fullscreen={{
                                            enterFullscreen: async () => {
                                                setInFullsreen2(!inFullscreen2)
                                                setStatusBarHidden(true, 'fade')
                                            }
                                        }}
                                        style={
                                            {
                                                width: Dimensions.get('window').height,
                                                height: Dimensions.get('window').width,

                                                transform: [{ rotateX: '45deg' }, { rotateZ: '45deg' }],


                                            }
                                        }
                                    />
                                    : null
                            )
                        })
                        }
                    </View>
                </View>
            </Modal>

            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Media")}
                        style={styles.backView}>
                        <BackIcon />
                    </TouchableOpacity>
                    <View style={styles.textView}>
                        <View style={styles.textView_block}>
                            <Text style={styles.headerTitle}>
                                {mediaName}
                            </Text>
                            <Line width={100} alignSelf='center' marginTop={4} />
                        </View>
                    </View>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}></Text>
                    </View>
                </View>

                {videos && videos?.map((el, i) => {
                    return (
                        el.title == mediaId ?
                            <ScrollView key={i}>
                                <View style={styles.video} >

                                    <VideoPlayer
                                        videoProps={{
                                            shouldPlay: inFullscreen2 ? false : true,
                                            resizeMode: Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT,
                                            source: {

                                                uri: el.video,
                                            }
                                        }}
                                        fullscreen={{
                                            inFullscreen: inFullscreen2,
                                            enterFullscreen: async () => {
                                                setStatusBarHidden(true, 'none')
                                                setInFullsreen2(!inFullscreen2)

                                            },
                                            exitFullscreen: async () => {
                                                setStatusBarHidden(false, 'none')
                                                setInFullsreen2(!inFullscreen2)
                                            },
                                        }}
                                        style={
                                            {
                                                videoBackgroundColor: 'black',
                                                width: 340,
                                                height: 200,
                                                paddingTop: 20
                                            }
                                        }
                                    />
                                </View>

                                <View style={styles.mediaDescription}>
                                    <Text style={styles.mediaTitle}>
                                        {el.name}
                                    </Text>
                                    <Text style={styles.mediaSubTitle}>
                                        {el.description}
                                    </Text>
                                </View>
                            </ScrollView>
                            : null
                    )
                })

                }

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#E5E5E5",
    },
    container: {
        backgroundColor: "#E5E5E5",
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        width: '90%',
        paddingTop: 50,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginBottom: 20,
    },
    backView: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: '15%'
    },
    textView: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textView_block: {
        width: '100%',
        textAlign: 'center'
    },
    circle: {
        width: '100%',
        height: 50,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleText: {
        fontSize: 15,
        color: '#159CE4'
    },
    headerTitle: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#374957',
        textAlign: 'center',
        paddingLeft: 10
    },
    mediaDescription: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '6%'
    },
    mediaTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    mediaSubTitle: {
        marginTop: '4%'
    },
    video: {
        width: '100%',
        // height: '50%',
        marginTop: '1%'

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: Dimensions.get('window').height,
        height: Dimensions.get('window').width,
        backgroundColor: 'white',
        alignItems: 'center',
        transform: [{ rotateZ: '90deg' }],

    },
})