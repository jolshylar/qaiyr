import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { ChevronLeftIcon, CogIcon } from "react-native-heroicons/outline";
import { blockToText, urlFor } from "../sanity";

const PostScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
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
    },
  } = useRoute();

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Header */}
      <View className="top-5 absolute flex-row w-full justify-between px-8 pt-8">
        <TouchableOpacity onPress={navigation.goBack}>
          <ChevronLeftIcon size={24} color="#3B7F8E" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <CogIcon size={24} color="#3B7F8E" />
        </TouchableOpacity>
      </View>
      {/* Post Content */}
      <View className="bg-white m-4 rounded-xl w-[90%]">
        <Image
          source={{ uri: urlFor(mainImage).url() }}
          className="max-w-max h-48 rounded-t-xl"
        />
        <View className="p-6">
          <View className="flex-row items-center gap-2">
            <Image
              source={{ uri: urlFor(author.image).url() }}
              className="h-10 w-10 bg-gray-300 p-4 rounded-full"
            />
            <Text className="font-bold text-xl">{author.name}</Text>
          </View>
          <Text className="mt-4 text-2xl font-extrabold">{title}</Text>
          {body && <Text className="mt-2 text-xl">{blockToText(body)}</Text>}
        </View>
        {/* Total Earned */}
        <View className="py-10 items-center justify-center gap-2">
          <Text className="text-2xl font-extrabold">Total Earned</Text>
          <Progress.Bar
            progress={currentAmount / neededAmount}
            color="#3B7F8E"
            width={200}
            height={20}
            className="rounded-full"
          />
          <Text className="text-center text-xl text-[#3B7F8E] font-bold">
            {currentAmount} / {neededAmount} KZT
          </Text>
          <Text className="text-center text-xl text-[#3B7F8E] font-bold">
            {Math.round((currentAmount / neededAmount) * 100)}%
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Payment")}
        className="bg-[#3B7F8E] w-[85%] rounded-xl p-2"
      >
        <Text className="text-2xl font-extrabold text-center text-white">
          Donate
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PostScreen;
