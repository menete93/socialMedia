import React from 'react';
import { View, Text,Image } from 'react-native';
import PropTypes from 'prop-types';
import style from './../UserPost/style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserPost = props => {
  return (
    <View style={style.userPostContainer} >

      <View style={style.view}>
        {/* LADO ESQUERDO */}
        <View style={style.image}>
          <UserProfileImage profileImage={props.profileImage} imageDimensions={48} />
          <View style={style.text}>
            <Text style={style.username}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && <Text style={style.location}>{props.location}</Text>}
          </View>
        </View>

        {/* LADO DIREITO */}
        <Icon name="ellipsis-h" size={20}  color={'#79869F'} />
      </View>

      <View style={{alignItems:'center'}}>
        <Image source={props.image}/>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookMarks: PropTypes.number.isRequired,
};

export default UserPost;
