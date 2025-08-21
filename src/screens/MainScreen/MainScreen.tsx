import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { styles } from '../MainScreen/MainScreenStyle';
import { StatusBar } from 'expo-status-bar';
import profile from '../../../assets/Profile.png'
import {LinkGitHub, LinkInstagram, LinkLinkedin, LinkWhatsApp } from '../../services/LinksRoutes';

export function MainScreen({navigation}: any) {

  function navToPdf(){
    navigation.navigate('Vitae')
  }
  function navToStacks(){
    navigation.navigate('Skills')
  }

  return (
    <View style={styles.container}>
        <Image source={profile} style={styles.avatar}/>
        <Text style={styles.name}>Lucas Batista </Text>
        <Text style={styles.subtitle}>Systems Analyst | Mobile Developer </Text>

        <>
        <TouchableOpacity onPress={LinkGitHub} style={styles.buttons}>
          <Text >GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={LinkLinkedin} style={styles.buttons}>
          <Text>Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={LinkWhatsApp} style={styles.buttons}>
          <Text>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={LinkInstagram} style={styles.buttons}>
          <Text>Instagram</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={navToStacks}style={styles.buttons}>
          <Text>Stacks</Text>
        </TouchableOpacity>  
        <TouchableOpacity onPress={navToPdf} style={styles.buttons}>
          <Text>Curriculo PDF</Text>
        </TouchableOpacity>
        </>


        <StatusBar style="auto" />
    </View>
  );
}