import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import style from './../UserProfileImage/style';

const UserProfileImage = ({profileImage, imageDimensions}) => {
  return (
    <View style={[style.userImageContainer, {borderRadius: imageDimensions}]}>
      <Image
        source={profileImage}
        style={[style.image, {width: imageDimensions, height: imageDimensions}]}
        accessibilityLabel="Imagem de perfil do usuário"
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
