// Title.js
import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Title = ({title}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
