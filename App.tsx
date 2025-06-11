import {
  Text,
  View,
  ImageSourcePropType,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from './android/components/Title/Title';
import globalStyle from './assets/styles/globalStyles';
import UserStory from './android/components/userStory/UserStory';
import UserPost from './android/components/UserPost/UserPost';

type UserStoryType = {
  id: number;
  firstName: string;
  profileImage: ImageSourcePropType;
};

type UserPostType = {
  id: number;
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookMarks: number;
  image: ImageSourcePropType;
  UserProfileImage: ImageSourcePropType;
};

const App = () => {
  const userStories: UserStoryType[] = useMemo(
    () => [
      {
        id: 1,
        firstName: 'menete',
        profileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 2,
        firstName: 'Angel',
        profileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 3,
        firstName: 'white',
        profileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 4,
        firstName: 'Oliver',
        profileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 5,
        firstName: 'Nata',
        profileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 6,
        firstName: 'Nicolas',
        profileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 7,
        firstName: 'Eito',
        profileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 8,
        firstName: 'Stelio',
        profileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 9,
        firstName: 'Adam',
        profileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
    ],
    [],
  );

  const userPosts: UserPostType[] = useMemo(
    () => [
      {
        id: 1,
        firstName: 'Alison',
        lastName: 'Becker',
        location: 'Boston MA',
        likes: 1201,
        comments: 24,
        bookMarks: 35,
        image: require('./assets/images/default_post.png'),
        UserProfileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 2,
        firstName: 'Kiko',
        lastName: 'Menete',
        location: 'Maputo City',
        likes: 101,
        comments: 5,
        bookMarks: 36,
        image: require('./assets/images/default_post.png'),
        UserProfileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 3,
        firstName: 'Stelio',
        lastName: 'Menete',
        location: 'Maputo City',
        likes: 258,
        comments: 24,
        bookMarks: 55,
        image: require('./assets/images/default_post.png'),
        UserProfileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 4,
        firstName: 'Eito',
        lastName: 'Menete',
        location: 'Maputo City',
        likes: 98,
        comments: 24,
        bookMarks: 55,
        image: require('./assets/images/default_post.png'),
        UserProfileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
      {
        id: 5,
        firstName: 'Lucia',
        lastName: 'Menete',
        location: 'Maputo Moz',
        likes: 2547,
        comments: 24,
        bookMarks: 55,
        image: require('./assets/images/default_post.png'),
        UserProfileImage: require('./assets/images/dafault_profile.png.jpg'),
      },
    ],
    [],
  );
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    UserStoryType[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (
    database: any[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return startIndex >= database.length
      ? []
      : database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const initialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(initialData);
    setIsLoadingUserStories(false);
  }, [userStories]);

  const loadMoreUserStories = () => {
    if (isLoadingUserStories) {
      return;
    }

    setIsLoadingUserStories(true);
    const nextPage = userStoriesCurrentPage + 1;
    const contentToAppend = pagination(
      userStories,
      nextPage,
      userStoriesPageSize,
    );

    if (contentToAppend.length > 0) {
      // Simula carregamento real
      setTimeout(() => {
        setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
        setUserStoriesCurrentPage(nextPage);
        setIsLoadingUserStories(false);
      }, 1000);
    } else {
      setIsLoadingUserStories(false);
    }
  };

  const userPostPageSize = 4;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRenderedData] = useState<
    UserPostType[]
  >([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);

  useEffect(() => {
    setIsLoadingUserPost(true);
    const initialData = pagination(userPosts, 1, userPostPageSize);
    setUserPostRenderedData(initialData);
    setIsLoadingUserPost(false);
  }, [userPosts]);

  const loadMoreUserPost = () => {
    if (isLoadingUserPost) {
      return;
    }

    setIsLoadingUserPost(true);
    const nextPage = userPostCurrentPage + 1;
    const contentToAppend = pagination(userPosts, nextPage, userPostPageSize);

    if (contentToAppend.length > 0) {
      // Simula carregamento real
      setTimeout(() => {
        setUserPostRenderedData(prev => [...prev, ...contentToAppend]);
        setUserPostCurrentPage(nextPage);
        setIsLoadingUserPost(false);
      }, 1000);
    } else {
      setIsLoadingUserPost(false);
    }
  };

  return (
    <View style={globalStyle.containerPost}>
      <FlatList
        data={userPostRenderedData}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <View>
            {/* Cabeçalho com título e ícone */}
            <View style={globalStyle.header}>
              <Title title="Let's Explore" />
              <TouchableOpacity style={globalStyle.messageIcon}>
                <Icon name="envelope" size={20} color="#898DAE" />
              </TouchableOpacity>
              <View style={globalStyle.messageNumberContainer}>
                <Text style={globalStyle.messageNumber}>2</Text>
              </View>
            </View>

            {/* FlatList horizontal para os Stories */}
            <FlatList
              data={userStoriesRenderedData}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View style={{marginRight: 8}}>
                  <UserStory
                    firstName={item.firstName}
                    profileImage={item.profileImage}
                  />
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              onEndReachedThreshold={0.5}
              onEndReached={loadMoreUserStories}
              contentContainerStyle={globalStyle.conteinerStyle}
              ListFooterComponent={
                isLoadingUserStories ? (
                  <View
                    style={{paddingHorizontal: 10, justifyContent: 'center'}}>
                    <ActivityIndicator size="small" color="#007bff" />
                  </View>
                ) : null
              }
            />
          </View>
        }
        renderItem={({item}) => (
          <View style={globalStyle.containerFlatlist}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              profileImage={item.UserProfileImage}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookMarks}
              location={item.location}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreUserPost}
      />
    </View>
  );
};

export default App;
