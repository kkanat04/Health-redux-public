import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Switch, Platform, TouchableOpacity } from "react-native";



export default function Adding({ data, setData, parentDays, enable }) {
  const [enabled, setEnabled] = useState(enable);

  const [days, setDays] = useState([
    {
      day_ru: 'Пн',
      day_eng: 'MONDAY',
      status: false
    },
    {
      day_ru: 'Вт',
      day_eng: 'TUESDAY',
      status: false
    },
    {
      day_ru: 'Ср',
      day_eng: 'WEDNESDAY',
      status: false
    },
    {
      day_ru: 'Чт',
      day_eng: 'THURSDAY',
      status: false
    },
    {
      day_ru: 'Пт',
      day_eng: 'FRIDAY',
      status: false
    },
    {
      day_ru: 'Сб',
      day_eng: 'SATURDAY',
      status: false
    },
    {
      day_ru: 'Вс',
      day_eng: 'SUNDAY',
      status: false
    }
  ])

  const changeObj = () => {
    parentDays.map(el => days.map(day => el !== day.day_eng ? day.status = false : null))
    parentDays.map(el => days.map(day => el == day.day_eng ? day.status = true : null))
  }

  useEffect(() => {
    changeObj()
  }, [])

  const changeDays = (prop) => {
    let arr = []
    days.map(el => {
      if (el.day_ru == prop) {
        el.status = !el.status
      }
      arr.push(el)
    })
    setDays(arr)
    let arr2 = []
    arr.forEach(el => {
      el.status === true && arr2.push(el.day_eng)
    })
    setData({ ...data, day: arr2 })
  }

  const toggleSwitch = () => {
    setEnabled((oldValue) => !oldValue);
    setData({ ...data, day: [], daily: !enabled })
  };

  return (
    <View style={enabled ? styles.container1 : styles.container}>

      <View style={enabled ? styles.content : styles.content1}>
        <View style={{ marginLeft: 10, height: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          {
            enabled ? <Text style={{ fontSize: 14, fontWeight: '700', color: 'black', }} >
              Eжедневно
            </Text>
              :
              <Text style={{ fontSize: 14, fontWeight: '700', color: 'black' }} >
                Выберите дни
              </Text>
          }

        </View>
        <Switch
          onValueChange={toggleSwitch}
          value={enabled}
          thumbColor={enabled ? thumbColorOn : thumbColorOff}
          trackColor={{ false: trackColorOff, true: trackColorOn }}
          ios_backgroundColor={trackColorOff}

        />
      </View>


      {enabled ?
        null
        :
        <View style={styles.buttons}>
          {days.map(d => {
            return (
              <TouchableOpacity
                onPress={() => {
                  changeDays(d.day_ru)
                }}
                key={d.day_ru}
                style={d.status ? styles.buttonstyle2 : styles.buttonstyle1}
              >
                <Text style={d.status ? styles.textbutton2 : styles.textbutton1}>{d.day_ru} {d.status ? <Text style={{ fontWeight: '700', fontSize: 16 }}>x</Text> : null}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      }
    </View>
  )
}

const thumbColorOn = Platform.OS === "android" ? "#fff" : "#fff";
const thumbColorOff = Platform.OS === "android" ? "#fff" : "#fff";
const trackColorOn = Platform.OS === "android" ? "#98e7f0" : "#0cd1e8";
const trackColorOff = Platform.OS === "android" ? "#EAF1FF" : "#EAF1FF";


const styles = StyleSheet.create({
  container: {
    width: '94%',
    backgroundColor: 'white',
    marginTop: '3%',
    marginBottom: '2%',
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 20,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    shadowColor: '#159CE4',
    elevation: 5,
  },
  container1: {
    width: '94%',
    backgroundColor: 'white',
    marginTop: '5%',
    marginBottom: '2%',
    marginLeft: 10,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 20,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    shadowColor: '#159CE4',
    elevation: 5,
  },
  content: {
    width: '90%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
  },
  content1: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    paddingTop: 22,
  },

  buttons: {
    width: '90%',
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '1%',
    marginLeft: '5%',
  },

  buttonstyle1: {
    backgroundColor: '#EAF1FF',
    borderWidth: 2,
    width: 50,
    height: 30,
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
    borderColor: '#EAF1FF',
    marginLeft: 10,
    marginTop: '3%',
  },
  textbutton1: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
    alignSelf: 'center',
    // paddingTop:-5
  },
  buttonstyle2: {
    backgroundColor: "#159CE4",
    borderColor: "#159CE4",
    borderWidth: 2,
    width: 50,
    height: 30,
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: '3%',
  },
  textbutton2: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    alignSelf: 'center',

  },
  buttonstyle4: {
    backgroundColor: "#159CE4",
    borderColor: "#159CE4",
    borderWidth: 2,
    width: 70,
    height: 30,
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: '5%',
  },
  buttonstyle3: {
    backgroundColor: '#EAF1FF',
    borderWidth: 2,
    width: 70,
    height: 30,
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
    borderColor: '#EAF1FF',
    marginLeft: 10,
    marginTop: '5%',
  },
});
