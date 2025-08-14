import React from "react";
import { View, Image } from "react-native";
import { styles } from "./StacksScreenStyle";
import Html from '../../../assets/HTML.png'
import Css from '../../../assets/CSS.png'
import Js from '../../../assets/JavaScript.png'
import Ts from '../../../assets/TypeScript.png'
import Node from '../../../assets/NodeJS-Dark.png'
import Npm from '../../../assets/Npm-Dark.png'
import react from '../../../assets/React-Dark.png'
import Tail from '../../../assets/TailwindCSS-Dark.png'
import Boot from '../../../assets/Bootstrap.png'
import Git from '../../../assets/Git.png'
import GitHub from '../../../assets/Github-Dark.png'

export function SkillScreen() {
  return <View style={styles.container}>
    <Image style={styles.img} source={Html}>
    </Image>
    <Image style={styles.img} source={Css}>
    </Image>
    <Image style={styles.img} source={Js}>
    </Image>
    <Image style={styles.img} source={Ts}>
    </Image>
    <Image style={styles.img} source={Node}>
    </Image>
    <Image style={styles.img} source={Npm}>
    </Image>
    <Image style={styles.img} source={react}>
    </Image>
    <Image style={styles.img} source={Tail}>
    </Image>
    <Image style={styles.img} source={Boot}>
    </Image>
    <Image style={styles.img} source={Git}>
    </Image>
    <Image style={styles.img} source={GitHub}>
    </Image>
  </View>;
}
