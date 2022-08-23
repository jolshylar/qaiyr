import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import { urlFor } from "../sanity";

const Post = ({
  id,
  title,
  slug,
  author,
  mainImage,
  categories,
  publishedAt,
  body,
  approved,
  currentAmount,
  neededAmount,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Post", {
          id,
          title,
          slug,
          author,
          mainImage,
          categories,
          publishedAt,
          body,
          approved,
          currentAmount,
          neededAmount,
        })
      }
      className="m-2 rounded-xl bg-white"
    >
      <Image
        source={{
          uri: urlFor(mainImage).url(),
        }}
        className="max-w-max h-32 rounded-t-xl"
      />
      <View className="p-4">
        {/* Author */}
        <View className="flex-row items-center gap-2">
          <Image
            source={{
              uri: urlFor(author.image).url(),
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="font-semibold">{author.name}</Text>
        </View>
        <Text className="my-2 text-xl font-semibold">{title}</Text>
        {/* Progress Bar */}
        <View className="p-2 flex-row items-center gap-2 justify-center">
          <Text>{currentAmount} KZT</Text>
          <Progress.Bar
            progress={currentAmount / neededAmount}
            color="#3B7F8E"
          />
          <Text>{neededAmount} KZT</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
