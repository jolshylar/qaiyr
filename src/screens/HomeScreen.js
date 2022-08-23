import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  CogIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import { useEffect, useState } from "react";
import sanityClient from "../sanity";
import Post from "../components/Post";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "post" && approved == true] {
        ...,
        author ->{
          ...,
        },
        category ->{
          ...,
        },
      }
      `
      )
      .then((data) => setPosts(data));
  }, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="flex-row p-4 items-center gap-2">
        <TouchableOpacity
          className="flex-1 flex-row items-center space-x-2"
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{
              uri: "https://bigredcloud.com/wp-content/uploads/2015/10/4-tips-for-taking-professional-profile-pictures.jpg",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View>
            <Text className="font-bold text-gray-400 text-xs">raiser</Text>
            <Text className="font-bold text-xl">
              Hi, Daryn! <ChevronDownIcon size={20} color="#3B7F8E" />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <CogIcon size={35} color="#3B7F8E" />
        </TouchableOpacity>
      </View>
      {/* Search */}
      <View className="flex-row items-center gap-2 pb-2 mx-4">
        <View className="flex-row items-center gap-2 flex-1 bg-gray-200 p-3 rounded-xl">
          <SearchIcon color="gray" size={20} />
          <TextInput placeholder="Search and help!" keyboardType="default" />
        </View>
        <AdjustmentsIcon color="#3B7F8E" />
      </View>
      {/* Posts */}
      <ScrollView className="mx-4 mb-32">
        {posts.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
