import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";

const Post = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Post")}
      className="m-2 rounded-xl"
    >
      <Image
        source={{
          uri: "https://www.brisbanekids.com.au/wp-content/uploads/2014/07/shutterstock_162013601.jpg",
        }}
        className="max-w-max h-32 rounded-t-xl"
      />
      <View className="p-2">
        {/* Author */}
        <View className="flex-row items-center gap-2">
          <Image
            source={{
              uri: "https://bigredcloud.com/wp-content/uploads/2015/10/4-tips-for-taking-professional-profile-pictures.jpg",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="font-semibold">Babulovs Family</Text>
        </View>
        {/* Progress Bar */}
        <View className="flex-row items-center gap-2 justify-center">
          <Text>123123</Text>
          <Progress.Bar progress={0.9} color="#3B7F8E" />
          <Text>132132</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
