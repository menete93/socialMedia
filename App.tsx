import { Text, View, ImageSourcePropType, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from './android/components/Title/Title';
import globalStyle from './assets/styles/globalStyles';
import UserStory from './android/components/userStory/UserStory';
import UserProfileImage from './android/components/UserProfileImage/UserProfileImage';
import UserPost from './android/components/UserPost/UserPost';

// ✅ Tipo para cada história
type UserStoryType = {
  id: number;
  firstName: string;
  profileImage: ImageSourcePropType;
};

type UserPostType = {
  id: number,
  firstName: string,
  lastName:string,
  location:string,
  likes: number,
  comments: number,
  bookMarks:number,
  image: ImageSourcePropType,
  UserProfileImage:ImageSourcePropType

  
};

const App = () => {
  // ✅ Dados de exemplo
  const userStories: UserStoryType[] = [
    { firstName: 'menete', id: 1, profileImage: require('./assets/images/dafault_profile.png.jpg') },
    { firstName: 'Angel', id: 2, profileImage: require('./assets/images/dafault_profile.png.jpg') },
    { firstName: 'white', id: 3, profileImage: require('./assets/images/dafault_profile.png.jpg') },
    { firstName: 'Oliver', id: 4, profileImage: require('./assets/images/dafault_profile.png.jpg') },
    { firstName: 'Nata', id: 5, profileImage: require('./assets/images/dafault_profile.png.jpg') },
    { firstName: 'Nicolas', id: 6, profileImage: require('./assets/images/dafault_profile.png.jpg') },
    { firstName: 'Eito', id: 7, profileImage: require('./assets/images/dafault_profile.png.jpg') },
    { firstName: 'Stelio', id: 8, profileImage: require('./assets/images/dafault_profile.png.jpg') },
    { firstName: 'Adam', id: 9, profileImage: require('./assets/images/dafault_profile.png.jpg') },
  ];

  const userPosts:UserPostType[] = [
    { id: 1,
      firstName:'Allison Backer',
      lastName:'Becker',
      location:'Boston MA',
      likes:1201,
      comments:24,
      bookMarks:35,
      image:require('./assets/images/default_post.png'),
      UserProfileImage:require('./assets/images/dafault_profile.png.jpg'),

       },
           { id: 2,
      firstName:'Kiko',
      lastName:'Menete',
      location:'Maptuto City',
      likes:101,
      comments:5,
      bookMarks:36,
      image:require('./assets/images/default_post.png'),
      UserProfileImage:require('./assets/images/dafault_profile.png.jpg'),

       },
           { id: 3,
      firstName:'Stelio',
      lastName:'Menete',
      location:'Maputo City',
      likes:258,
      comments:24,
      bookMarks:55,
      image:require('./assets/images/default_post.png'),
      UserProfileImage:require('./assets/images/dafault_profile.png.jpg'),

       },
           { id: 4,
      firstName:'Eito',
      lastName:'Menete',
      location:'Maputo City',
      likes:98,
      comments:24,
      bookMarks:55,
      image:require('./assets/images/default_post.png'),
      UserProfileImage:require('./assets/images/dafault_profile.png.jpg'),

       },
           { id: 5,
      firstName:'Lucia',
      lastName:'Menete',
      location:'Maputo Moz',
      likes:2547,
      comments:24,
      bookMarks:55,
      image:require('./assets/images/default_post.png'),
      UserProfileImage:require('./assets/images/dafault_profile.png.jpg'),

       },
        
  ]

  const userStoriesPageSize = 4;

  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<UserStoryType[]>([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);
  
   const userPostPageSize = 4;

  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRenderedData] = useState<UserPostType[]>([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);


  // ✅ Função de paginação
  const pagination = (database: UserStoryType[], currentPage: number, pageSize: number) => {
   console.log('currentPage',currentPage);
   
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return startIndex >= database.length ? [] : database.slice(startIndex, endIndex);
  };


  // ✅ Carregar os dados iniciais
  useEffect(() => {
    setIsLoadingUserStories(true);
    const initialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(initialData);
    setIsLoadingUserStories(false);
  }, []);

  // ✅ Carregar mais dados ao final da lista
  const loadMoreUserStories = () => {
    if (isLoadingUserStories) return;

    const nextPage = userStoriesCurrentPage + 1;
    const contentToAppend = pagination(userStories, nextPage, userStoriesPageSize);

    if (contentToAppend.length > 0) {
      setIsLoadingUserStories(true);
      setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
      setUserStoriesCurrentPage(nextPage);
      setIsLoadingUserStories(false);
    }
  };

  return (
    <View style={globalStyle.header}>
      <Title title="Let's Explore" />
      <TouchableOpacity style={globalStyle.messageIcon}>
        <Icon name="envelope" size={20} color="#898DAE" />
      </TouchableOpacity>
      <View style={globalStyle.messageNumberContainer}>
        <Text style={globalStyle.messageNumber}>2</Text>
      </View>

      <View style={globalStyle.userStoryContainer}>
        <FlatList
          data={userStoriesRenderedData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserStory firstName={item.firstName} profileImage={item.profileImage} />
          )}
          horizontal
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreUserStories}
          showsHorizontalScrollIndicator={false}
        />

        <View style={{
  //  flex:1,
   paddingHorizontal: 50,
   paddingVertical: 180,
  //  justifyContent: 'flex-start', 
  //  alignItems: 'flex-start' 
     }}>
  <FlatList
    data={userPosts}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <UserPost
        firstName={item.firstName}
        lastName={item.lastName}
        image={item.image}
        profileImage={item.UserProfileImage}
        likes={item.likes}
        comments={item.comments}
        bookmarks={item.bookMarks}
        // profileImage={item.UserProfileImage}
        // location={item.location}
        // imageDimensions={48}
      />
    )}
    showsVerticalScrollIndicator={false}
  />
</View>
      </View>
           



    </View>
  );
  
};

export default App;
