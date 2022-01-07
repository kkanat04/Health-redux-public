import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch, Platform, Image } from "react-native";
import Budilnik from '../../../../../assets/images/budilnik.svg';
import Sumka from '../../../../../assets/images/sumka.svg';
import { connect } from 'react-redux';
import Spiner from '../../../../common/Spiner/Spiner';
import { editAlarm } from './../../../../redux/store/reducers/alarm-reducer';
import { useNavigation } from '@react-navigation/native';

const PillsComp = (props) => {
    const [enabled, setEnabled] = useState(props.active);

    const [data, setData] = useState({
        "name": props.title,
        "day": props.days,
        "daily": props.daily,
        "active": props.active,
        "hour": props.hours,
        "author": props.author
    });

    const navigation = useNavigation()

    const toggleSwitch = (status) => {
        setEnabled((oldValue) => !oldValue);
        props.editAlarm(props.alarmId, { active: status }, props.alarmList, 'PATCH', navigation)
    };

    const thumbColorOn = Platform.OS === "android" ? "#fff" : "#fff";
    const thumbColorOff = Platform.OS === "android" ? "#fff" : "#fff";
    const trackColorOn = Platform.OS === "android" ? "#98e7f0" : "#0cd1e8";
    const trackColorOff = Platform.OS === "android" ? "#EAF1FF" : "#EAF1FF";


    if (props.isLoading) {
        return <Spiner />
    }

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', width: '35%', }}>
                <Budilnik alignSelf={'center'} />
                <View style={{ marginLeft: 10, }}>
                    <Text style={enabled ? { fontSize: 12, fontWeight: '400', color: 'black', textTransform: 'lowercase' } : { fontSize: 13, fontWeight: '400', color: 'silver', textTransform: 'lowercase' }} >
                        {
                            props?.daily === true
                                ?
                                <Text>Ежедневно</Text>
                                :
                                props?.days?.map((element, id) => {
                                    return (
                                        <Text key={id}>
                                            {id + 1 === props?.days?.length ? element.slice(0, 3) : element.slice(0, 3) + ', '}
                                        </Text>
                                    )
                                })
                        }
                    </Text>

                    <Text style={enabled ? { fontSize: 15, fontWeight: '700', color: 'black', } : { fontSize: 15, fontWeight: '700', color: 'silver', }}>

                        {props.hours}

                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '35%', }}>
                <Sumka alignSelf={'center'} />
                <View style={{ marginLeft: 10, }}>
                    <Text style={enabled ? { fontSize: 15, fontWeight: '700', color: 'black', } : { fontSize: 15, fontWeight: '700', color: 'silver', }}>
                        {props.title}
                    </Text>
                </View>
            </View>

            <Switch
                onValueChange={(event) => {
                    toggleSwitch(event)
                    // props.editAlarm(props.alarmId, { active: event }, props.alarmList,navigation)
                }}
                value={enabled}
                thumbColor={enabled ? thumbColorOn : thumbColorOff}
                trackColor={{ false: trackColorOff, true: trackColorOn }}
                ios_backgroundColor={trackColorOff}
            />

        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.alarm.isLoading,
        alarmList: state.alarm.alarmList
    }
}


export default connect(mapStateToProps, { editAlarm })(PillsComp)

const styles = StyleSheet.create({
    container: {
        width: '94%',
        backgroundColor: 'white',
        marginTop: '5%',
        marginBottom: '2%',
        height: 'auto',
        borderRadius: 20,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        shadowColor: '#159CE4',
        elevation: 5,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,

    },
    containerIOS: {
        width: '94%',
        backgroundColor: 'white',
        marginTop: '5%',
        marginBottom: '2%',
        height: 60,
        borderRadius: 20,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        shadowColor: '#159CE4',
        elevation: 5,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
});
