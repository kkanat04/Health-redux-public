import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PillsComp from './PillsComp';
import BackIcon from '../../../../../assets/images/backicon.svg';
import Line from '../../../../../assets/images/line.svg';


const Pills = ({ navigation, alarmList, userData }) => {
  const [btn, setBtn] = useState(false)

  const alarmItem =
    alarmList.length === 0 ? null :
      alarmList?.map((el, i) => {
        return (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={
              () => {
                navigation.navigate('PillsAdd', {
                  active: el?.active,
                  daily: el?.daily,
                  currentHour: el?.hour,
                  days: el?.day,
                  change: 'Изменить напоминание',
                  alarmId: el?.id,
                  title: el?.name,
                  author: userData?.id
                })
              }}
            key={i}
          >

            <PillsComp
              hours={el?.hour?.slice(0, 5)}
              daily={el?.daily}
              days={el?.day}
              title={el?.name}
              key={i}
              active={el?.active}
              alarmId={el?.id}
            />

          </TouchableOpacity>
        )
      })


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainPage")}
          style={styles.backView}>
          <BackIcon />
        </TouchableOpacity>
        <View style={styles.textView}>
          <View style={styles.textView_block}>
            <Text style={styles.headerTitle}>
              Прием лекарств
            </Text>
            <Line width={100} alignSelf='center' marginTop={4} />
          </View>
        </View>
        <View style={styles.circle}>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
        style={styles.content}>
        <View>
          {
            alarmList.length === 0 ?
              <Text style={styles.alarmNull} >Напоминаний нет, создайте первое</Text>
              :
              alarmItem
          }
        </View>
      </ScrollView>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={
            () => {
              setBtn(!btn);
              navigation.navigate('PillsAdd', { change: 'Новое напоминание', author: userData?.id })
            }}
          style={styles.buttonstyle2}>

          <Text style={styles.textbutton2}>Добавить</Text>

        </TouchableOpacity>
      </View>



    </View>
  )
}

export default Pills

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    alignItems: 'center',
    marginTop: '160%',

  },
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    flexDirection: 'row',
    width: '90%',
    paddingTop: 50,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 20
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
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 50
  },
  headerTitle: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#374957',
    textAlign: 'center',
  },

  headerText: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 6,
    letterSpacing: 0.4,
    alignSelf: 'center',
  },
  hederLine: {
    alignSelf: "center",
    marginTop: 4,
  },
  content: {
    width: '100%',
    marginTop: '2%',
    height: '80%'
  },
  alarmNull: {
    marginLeft: '5%',
    fontSize: 15,

  },
  buttons: {
    width: '80%',
    marginTop: '3%',
    marginBottom: '5%',
    alignItems: 'center',
    alignSelf: 'center',
  },

  buttonstyle1: {
    borderColor: "#159CE4",
    borderWidth: 2,
    width: '80%',
    height: 45,
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  textbutton1: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
  },
  buttonstyle2: {
    backgroundColor: "#159CE4",
    borderColor: "#159CE4",
    borderWidth: 2,
    width: '80%',
    height: 45,
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  textbutton2: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },

});

