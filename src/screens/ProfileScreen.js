import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  ChevronLeftIcon,
  CogIcon,
  PencilIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "react-native-heroicons/outline";
import Post from "../components/Post";
import sanityClient from "../sanity";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type=='post'] {
          ...,
          author->{
            ...
          }
        }
      `
      )
      .then((data) => setPosts(data));
  }, []);

  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://bigredcloud.com/wp-content/uploads/2015/10/4-tips-for-taking-professional-profile-pictures.jpg",
        }}
        className="h-64 w-full bg-gray-300 p-4"
      />
      {/* User Info */}
      <View className="items-center">
        <View className="flex-row w-full justify-between p-4">
          <TouchableOpacity onPress={navigation.goBack}>
            <ChevronLeftIcon size={32} color="#3B7F8E" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <CogIcon size={32} color="#3B7F8E" />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: "https://bigredcloud.com/wp-content/uploads/2015/10/4-tips-for-taking-professional-profile-pictures.jpg",
          }}
          className="w-36 h-36 bg-gray-300 p-4 rounded-full border-white border-8 -mt-36"
        />
        <Text className="text-3xl font-extrabold">Daryn Bekov</Text>
        <Text className="text-2xl font-semibold text-gray-400">raiser</Text>
      </View>

      <View className="flex-row items-center justify-center py-4 gap-6">
        <TouchableOpacity
          className="p-2 bg-gray-200 rounded-full"
          onPress={() => navigation.navigate("Edit Profile")}
        >
          <PencilIcon color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center space-x-2 px-4 py-2 bg-gray-200 rounded-full"
          onPress={() => navigation.navigate("Add Post")}
        >
          <ViewGridAddIcon color="black" />
          <Text className="text-xl font-bold">new post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="p-2 bg-gray-200 rounded-full"
          onPress={() => navigation.navigate("Edit Profile")}
        >
          <UserGroupIcon color="black" />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center gap-6 py-4">
        <View className="items-center">
          <Text className="text-2xl font-extrabold text-[#3B7F8E]">145</Text>
          <Text className="text-2xl font-bold text-gray-400">posts</Text>
        </View>
        <View className="items-center">
          <Text className="text-2xl font-extrabold text-[#3B7F8E]">69420</Text>
          <Text className="text-2xl font-bold text-gray-400">views</Text>
        </View>
        <View className="items-center">
          <Text className="text-2xl font-extrabold text-[#3B7F8E]">420</Text>
          <Text className="text-2xl font-bold text-gray-400">likes</Text>
        </View>
      </View>
      {/* Total Donated */}
      <View className="items-center p-4 bg-gray-200 rounded-xl mx-4">
        <Text className="text-gray-500 text-2xl font-bold">Total Donated</Text>
        <Text className="text-[#3B7F8E] text-xl font-bold">
          1 000 000 872,00 KZT
        </Text>
      </View>
      {/* User Posts */}
      <View className="mx-2 my-8">
        <Text className="m-2 text-3xl font-bold">Your Posts</Text>
        {posts.length > 0 &&
          posts.map((post) => <Post key={post._id} {...post} />)}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
