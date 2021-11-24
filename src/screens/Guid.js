import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import RoundBtn from '../shared/comps/RoundBtn';
import SchemaStyles from '../shared/SchemaStyles';

/**
 * Created on 11/4/21 by lonmee
 */
const iconDic = {
  MetaLife: require('../assets/image/guid/MetaLife.social.png'),
  guid: require('../assets/image/guid/guid.png'),
};

const Guid = ({navigation}) => {
  const {flex1, alignItemsCenter, width100Percent} = SchemaStyles();
  const {titleImg, buttons, buttonPadding} = styles;
  return (
    <ImageBackground style={[flex1, alignItemsCenter]} source={iconDic.guid}>
      <Image style={titleImg} source={iconDic.MetaLife} />
      <View style={flex1} />
      <View style={[buttons, width100Percent]}>
        <RoundBtn title={'Login'} press={() => navigation.navigate('Login')} />
        <View style={buttonPadding} />
        <RoundBtn
          title={'Sign up'}
          press={() => navigation.navigate('SignUp', {foo: 'foo'})}
        />
        <View style={buttonPadding} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titleImg: {
    marginTop: 178,
  },
  buttons: {
    marginBottom: 50,
  },
  buttonPadding: {
    height: 15,
  },
});

export default Guid;
