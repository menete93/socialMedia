import { Text, View } from "react-native";
import React, { } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from "./android/components/Title/Title";
import { TouchableOpacity } from "react-native";
import globalStyle from "./assets/styles/globalStyles";
import { FlatList } from "react-native";
import UserStory from "./android/components/userStory/UserStory";

//type Props = {}

const App = () => {


  const userStories = [

    {
      firstName: 'menete',
      id: 1,
      profileImage: require('./assets/images/dafault_profile.png.jpg'),
    }, {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/dafault_profile.png.jpg'),
    }, {
      firstName: 'white',
      id: 3,
      profileImage: require('./assets/images/dafault_profile.png.jpg'),
    }
    , {
      firstName: 'Oliver',
      id: 4,
      profileImage: require('./assets/images/dafault_profile.png.jpg'),
    }
    , {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/dafault_profile.png.jpg'),
    }
    , {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/dafault_profile.png.jpg'),
    }
    , {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/dafault_profile.png.jpg'),
    }
    , {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./assets/images/dafault_profile.png.jpg'),
    }, {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/dafault_profile.png.jpg'),
    }




  ]


  return (
    <View style={globalStyle.header}>
      <Title title="Let's Explore" />
      <TouchableOpacity style={globalStyle.messageIcon}>
        <Icon name="envelope" size={20} color='#898DAE' />
      </TouchableOpacity>
      <View style={globalStyle.messageNumberContainer}>
        <Text style={globalStyle.messageNumber}>2</Text>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          data={userStories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default App;