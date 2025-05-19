import PropTypes from 'prop-types';
import React from 'react';
import { View, Text,Image } from 'react-native';
import style from '../Title/style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={style.view} >
      <View style={style.userImageContainer}>
      <Image style={style.image} source={props.profileImage} />
      {/* <UserProfileImage profileImage={props.profileImage}/> */}
      </View>
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;
