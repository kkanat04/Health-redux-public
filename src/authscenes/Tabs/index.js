import React, { useState, useEffect } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation, } from "@react-navigation/native";
import MainIcon from "../../../assets/images/mainIcon.svg";
import ForumIcon from "../../../assets/images/forumIcon.svg";
import ProfileIcon from "../../../assets/images/profileIcon.svg";
import Mainnone from "../../../assets/images/mainnone.svg";
import ForumActive from "../../../assets/images/forumactive.svg";
import Profileactive from "../../../assets/images/profileactive.svg";
import { connect } from 'react-redux';
import { setCurrentTab } from './../../redux/store/reducers/tabs-reducer';

const Tabs = ({ currentTab, setCurrentTab }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.icons}>
          <TouchableOpacity
            style={Platform.OS == 'android' ?
              { alignSelf: 'center', alignItems: 'center', width: '33%' }
              : { alignSelf: 'center', alignItems: 'center', width: '33%' }
            }
            onPress={() => {
              setCurrentTab('MainPage');
              navigation.navigate("MainPage");
            }}
          >
            {currentTab == 'MainPage' ? (
              <MainIcon style={{ width: 35 }} />
            ) : (
              <Mainnone style={{ width: 35 }} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={Platform.OS == 'android' ?
              { alignSelf: 'center', alignItems: 'center', width: '33%' }
              : { alignSelf: 'center', alignItems: 'center', width: '33%' }
            }
            onPress={() => {
              setCurrentTab('Forum');
              navigation.navigate("Forum");
            }}
          >
            {currentTab == 'Forum' ? (
              <ForumActive style={{ width: 35, }} />
            ) : (
              <ForumIcon style={{ width: 35, }} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={Platform.OS == 'android' ?
              { alignSelf: 'center', alignItems: 'center', width: '33%' }
              : { alignSelf: 'center', alignItems: 'center', width: '33%' }
            }
            onPress={() => {
              setCurrentTab('Profile');
              navigation.navigate("Profile");
            }}
          >
            {currentTab == 'Profile' ? (
              <Profileactive style={{ width: 55, }} />
            ) : (
              <ProfileIcon style={{ width: 55, }} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    currentTab: state.tabs.currentTab
  }
}

export default connect(mapStateToProps, { setCurrentTab })(Tabs)

const windowDimensions = Dimensions.get("window");
const windowWidth = windowDimensions.width;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#E5E5E5",
  },
  content: {
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
    paddingBottom: '1%',
    paddingTop: '1%'
  },
  icons: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  }
});