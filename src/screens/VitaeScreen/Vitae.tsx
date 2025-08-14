import React from 'react';
import {Image, ScrollView } from 'react-native';
import curriculo from '../../../assets/Curriculo PNG.png'
import { styles } from './VitaeStyles';



export function Vitae() {
  return (
    <ScrollView style={styles.container}>
        <Image source={curriculo} style={styles.img}></Image>
    </ScrollView>
  );
}
