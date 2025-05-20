import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import style from '../Title/style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={style.view}>
      <UserProfileImage profileImage={props.profileImage} imageDimensions={65} />
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;
