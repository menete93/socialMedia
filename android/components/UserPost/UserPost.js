import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from './../UserPost/style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserPost = props => {
  return (
    <View style={style.view}>
      <View style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
        width: '100%',
      }}>
        <UserProfileImage 
          profileImage={props.profileImage}
          imageDimensions={48}
        />
        <View>
          <Text>
            {props.firstName}
          </Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage:PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookMarks: PropTypes.number.isRequired,
};

export default UserPost;
